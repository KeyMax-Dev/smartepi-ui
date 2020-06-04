import React, { useState, useEffect } from 'react';
import { DatepickerElement } from "./style";
import Button from '../Button';

interface DatepickerProps extends React.HTMLProps<HTMLDivElement> {
    initial?: Date;
    onDaySelected?: (day: Date) => void;
    width?: string;
    height?: string;
}

type Indicator = 'month' | 'year' | 'decade';

const MONTH_NAMES = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outuburo", "Novembro", "Dezembro"];
const WEEKDAY_NAMES = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"];
const DAY_TIME = 86400000;
const DEFAULT_WIDTH = '300px';
const DEFAULT_HEIGHT = '300px';

function generateMonthDays(date = new Date()): Date[][] {
    const monthDays: Date[][] = [];
    const firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
    let day = new Date(firstDay.getFullYear(), firstDay.getMonth(), 1 - firstDay.getDay());
    for (let weekcount = 0; weekcount < 6; weekcount++) {
        monthDays[weekcount] = [];
        for (let weekday = 0; weekday < 7; weekday++) {
            monthDays[weekcount][weekday] = new Date(day);
            day = new Date(day.setDate(day.getDate() + 1));
        }
    }
    return monthDays;
}

export default function Datepicker(props: DatepickerProps): JSX.Element {

    const [body, setBody] = useState<JSX.Element[]>();
    const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
    const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
    const [currentIndicator, setCurrentIndicator] = useState<Indicator>('month');
    const [indicatorText, setIndicatorText] = useState<string>();
    const [selectedDate, setSelectedDate] = useState<Date | undefined>(props.initial);

    const changeIndicator = (d: number) => {
        switch (currentIndicator) {
            case 'year':
                setCurrentYear(currentYear + d);
                break;
            case 'month':
                setCurrentMonth(currentMonth + d);
                break;
            case 'decade':
                setCurrentYear(currentYear + d * 10);
                break;
        }
    };

    const DayElement = ({ day }: { day: Date }): JSX.Element => {
        let className = '__datepicker-list-item-container';
        let disableClick = false;
        if (Date.now() - day.getTime() >= 0 && Date.now() - day.getTime() <= DAY_TIME) {
            className += ' __datepicker-list-item-today'; // Today class
        }
        if (selectedDate && day.toDateString() === selectedDate.toDateString()) {
            className += ' __datepicker-list-item-selected'; // Selected days class
        }
        if (day.getMonth() !== currentMonth) {
            className += ' __datepicker-list-item-outday'; // Out month days class
        }
        if (Date.now() - DAY_TIME - day.getTime() > 0) {
            className += ' __datepicker-list-item-unavaliable'; // Unavaliable or past days class
            disableClick = true;
        }

        const selectDay = (event: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
            event.stopPropagation();
            setSelectedDate(day);
            if (day.getMonth() !== currentMonth) setCurrentMonth(day.getMonth());
            if (props.onDaySelected) props.onDaySelected(day);
        };

        return <li onClick={disableClick ? undefined : selectDay} className={className}>{day.getDate()}</li>;
    };

    const WeekElement = ({ week }: { week: Date[] }): JSX.Element => {
        return <ul className="__datepicker-week-container">{week.map((day, index) => <DayElement key={index} day={day} />)}</ul>;
    };

    const MonthElement = ({ date = new Date(currentYear) }: { date: Date }): JSX.Element => {
        let className = '__datepicker-list-item-container';
        let disableClick = false;
        if (new Date().getMonth() === date.getMonth() && new Date().getFullYear() === date.getFullYear()) {
            className += ' __datepicker-list-item-today';
        }
        if (new Date().getFullYear() > date.getFullYear() || (new Date().getMonth() > date.getMonth() && new Date().getFullYear() === date.getFullYear())) {
            className += ' __datepicker-list-item-unavaliable';
            disableClick = true;
        } else {
            if (selectedDate && date.getFullYear() === selectedDate.getFullYear() && date.getMonth() === selectedDate.getMonth()) {
                className += ' __datepicker-list-item-selected';
            }
        }

        const selectMonth = (event: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
            event.stopPropagation();
            setCurrentIndicator('month');
            setCurrentMonth(date.getMonth());
        };

        return <li onClick={disableClick ? undefined : selectMonth} className={className}>{MONTH_NAMES[date.getMonth()]}</li>;
    };

    const YearElement = ({ fullYear }: { fullYear: number }): JSX.Element => {
        let className = '__datepicker-list-item-container';
        let disableClick = false;
        if (new Date().getFullYear() === fullYear) {
            className += ' __datepicker-list-item-today';
        }
        if (new Date().getFullYear() > fullYear) {
            className += ' __datepicker-list-item-unavaliable';
            disableClick = true;
        } else {
            if (selectedDate && fullYear === selectedDate.getFullYear()) {
                className += ' datepicker-list-item-selected'; // Selected days class
            }
        }

        const selectYear = (event: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
            event.stopPropagation();
            setCurrentIndicator('year');
            setCurrentYear(fullYear);
        };

        return <li onClick={disableClick ? undefined : selectYear} className={className}>{fullYear}</li>;
    };


    const fillMonth = (date = new Date(currentYear, currentMonth)) => {
        setCurrentYear(date.getFullYear());
        setCurrentMonth(date.getMonth());
        setIndicatorText(MONTH_NAMES[date.getMonth()] + ' ' + date.getFullYear());
        setCurrentIndicator('month');

        const monthDays = generateMonthDays(date);
        return monthDays.map((week, index) => <WeekElement key={index} week={week} />);
    };

    const fillYear = (fullYear = currentYear) => {
        setCurrentIndicator('year');
        setCurrentYear(fullYear);

        const list: JSX.Element[] = [];
        for (let i = 0; i < 4; i++) {
            const aux: JSX.Element[] = [];
            for (let j = 0; j < 3; j++) {
                const index = i * 3 + j;
                aux.push(<MonthElement date={new Date(fullYear, index)} key={index} />);
            }
            list.push(<ul className="__datepicker-week-container" key={i}>{aux}</ul>);
        }

        setIndicatorText(fullYear.toString());
        return list;
    };

    const fillDecade = (from = currentYear) => {
        setCurrentIndicator('decade');
        from = Math.floor(from / 10) * 10;
        setCurrentYear(from);

        const list: JSX.Element[] = [];
        for (let i = 0; i < 5; i++) {
            const aux: JSX.Element[] = [];
            for (let j = 0; j < 2; j++) {
                const fullYear = from + i * 2 + j;
                aux.push(<YearElement fullYear={fullYear} key={fullYear} />);
            }
            list.push(<ul className="__datepicker-week-container" key={i}>{aux}</ul>);
        }

        setIndicatorText(`${from} - ${from + 9}`);
        return list;
    };

    const nextIndicator = () => {
        switch (currentIndicator) {
            case 'month':
                return setCurrentIndicator('year');
            case 'year':
                return setCurrentIndicator('decade');
            case 'decade':
                return;
        }
    };

    useEffect(() => {
        switch (currentIndicator) {
            case 'month':
                return setBody(fillMonth());
            case 'year':
                return setBody(fillYear());
            case 'decade':
                return setBody(fillDecade());
        }
    }, [currentIndicator, currentYear, currentMonth, selectedDate]);

    return (
        <DatepickerElement width={props.width ? props.width : DEFAULT_WIDTH} height={props.height ? props.height : DEFAULT_HEIGHT}>
            <div className="__datepicker-header">
                <Button buttonType="icon" icon="chevronLeft" onClick={() => changeIndicator(-1)} />
                <span className="__datepicker-idicator" onClick={nextIndicator}>{indicatorText}</span>
                <Button buttonType="icon" icon="chevronRight" onClick={() => changeIndicator(1)} />
            </div>
            {currentIndicator === 'month' &&
                <ul className="__datepicker-week-title">
                    {WEEKDAY_NAMES.map((weekdayName) => <li key={weekdayName}>{weekdayName}</li> )}
                </ul>
            }
            <div className="__datepicker-body">{body}</div>
        </DatepickerElement>
    );
}