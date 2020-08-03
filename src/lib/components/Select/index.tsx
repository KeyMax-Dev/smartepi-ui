import React, { useState, useEffect, useRef } from 'react';
import { SelectContainerElement, SelectListElement } from './style';
import { InputElement } from '../Input/style';
import Icon from '../Icon';
import Spinners from '../../assets/svgs/spinners';
import Button from '../Button';
import { useAnimation } from 'framer-motion';

interface SelectProps<T> {
    data: T[];
    dataKey: keyof T;
    loading?: boolean;
    onSelect?: (event: React.MouseEvent<HTMLDivElement>, item: T) => void;
    onSearch?: (value: string) => void;
    value?: string;
    color?: string;
    invert?: boolean;
}

const SEARCH_LIMIT_TIME = 1000;
let SEARCH_TIMER: number;

export default function Select<T>({ data, dataKey, loading, onSelect, onSearch, value, color, invert }: SelectProps<T>): JSX.Element {

    const [inputValue, setInputValue] = useState<string>('');
    const [selected, setSelected] = useState<T>();
    const [opened, setOpened] = useState<boolean>(false);
    const [filteredData, setFilteredData] = useState<T[]>(data);
    const buttonAnimationController = useAnimation();
    const containerRef = useRef<any>();


    useEffect(() => {
        if (value) {
            setInputValue(value);
        }
    }, [value]);

    const itemSelectHandler = (event: React.MouseEvent<HTMLDivElement>, item: T) => {
        setSelected(item);
        setInputValue(`${item[dataKey]}`);
        setOpened(false);
        if (onSelect) onSelect(event, item);
    };

    const inputChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = `${event.target.value}`;
        setInputValue(value);
        setSelected(undefined);

        setFilteredData(data.filter(item => `${item[dataKey]}`.match(value)));

        clearTimeout(SEARCH_TIMER);
        SEARCH_TIMER = setTimeout(() => {
            if (onSearch) onSearch(value);
        }, SEARCH_LIMIT_TIME);
    };

    const focusHandler = (event: React.FocusEvent<HTMLInputElement>) => {
        console.log('focus', event.currentTarget);
        setOpened(true);
    };

    const togglerHandler = () => {
        setOpened(!opened);
    };

    const renderListItem = (item: T, index: number) => {
        return <div
            key={index}
            onClick={(event) => itemSelectHandler(event, item)}
            className="select-list-item">
            {`${item[dataKey]}`}
        </div>;
    };

    useEffect(() => {
        const closeHandler = (event: MouseEvent) => {
            if (containerRef.current) {
                if (containerRef.current.contains(event.target as HTMLElement)) {
                    console.log('contains');
                    (containerRef.current.firstChild as HTMLInputElement).focus();
                } else {
                    setOpened(false);
                }
            }
        };

        if (opened) {
            setFilteredData(data.filter(item => `${item[dataKey]}`.match(inputValue)));
            buttonAnimationController.start({ rotate: 180, transition: { duration: 0.1, ease: 'backInOut' } });
            window.addEventListener('click', closeHandler);
        } else {
            buttonAnimationController.start({ rotate: 0, transition: { duration: 0.1, ease: 'backInOut' } });
            if (!selected) {
                setInputValue('');
            }
        }

        return () => window.removeEventListener('click', closeHandler);
    }, [opened]);

    return (
        <SelectContainerElement color={color} invert={invert} ref={containerRef}>
            <InputElement value={inputValue} onChange={inputChangeHandler} onFocus={focusHandler} />
            <Button buttonType="icon" icon="chevronDown" iconSize="20px" onClick={togglerHandler} animate={buttonAnimationController} />
            {opened &&
                <SelectListElement color={color} invert={invert} >
                    {filteredData.length > 0 &&
                        filteredData.map(renderListItem)
                    }
                    {loading &&
                        <div className="select-list-loading">
                            <Spinners.circles width="40px" height="40px" />
                            <span>Carregando mais dados...</span>
                        </div>
                    }
                    {!loading && filteredData.length < 1 &&
                        <div className="select-list-loading">
                            <span>Nenhum item encontrado</span>
                        </div>
                    }
                </SelectListElement>
            }
        </SelectContainerElement>
    );
}