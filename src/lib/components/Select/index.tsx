import React, { useState, useEffect, useRef } from 'react';
import { SelectContainerElement, SelectListElement } from './style';
import { InputElement } from '../Input/style'; import Spinners from '../../assets/svgs/spinners';
import Button from '../Button';
import { useAnimation } from 'framer-motion';
import ScrollableContainer from '../ScrollableContainer';

interface SelectProps<T> {
    data: T[];
    dataKey: keyof T;
    loading?: boolean;
    onSelect?: (event: React.MouseEvent<HTMLDivElement>, item: T) => void;
    onSearch?: (value: string) => void;
    value?: T;
    color?: string;
    invert?: boolean;
    placeholder?: string;
    containerType?: 'outline' | 'downline';
}

const SEARCH_LIMIT_TIME = 500;
let SEARCH_TIMER: number;

export default function Select<T>({ data, dataKey, loading, onSelect, onSearch, value, color, invert, placeholder, containerType }: SelectProps<T>): JSX.Element {

    const [inputValue, setInputValue] = useState<string>(value ? `${value[dataKey]}` : '');
    const [selected, setSelected] = useState<T | undefined>(value);
    const [opened, setOpened] = useState<boolean>(false);
    const [filteredData, setFilteredData] = useState<T[]>(data);
    const buttonAnimationController = useAnimation();
    const containerRef = useRef<any>();

    useEffect(() => {
        if (value) {
            setInputValue(`${value[dataKey]}`);
        }
    }, [value]);

    const itemSelectHandler = (event: React.MouseEvent<HTMLDivElement>, item: T): void => {
        setSelected(item);
        setInputValue(`${item[dataKey]}`);
        setOpened(false);
        if (onSelect) onSelect(event, item);
    };

    const inputChangeHandler = (event: React.ChangeEvent<HTMLInputElement>): void => {
        const value = `${event.target.value}`;
        setInputValue(value);
        setSelected(undefined);

        clearTimeout(SEARCH_TIMER);
        SEARCH_TIMER = setTimeout(() => {
            setFilteredData(data.filter(item => `${item[dataKey]}`.match(value)));
            if (onSearch) onSearch(value);
        }, SEARCH_LIMIT_TIME);
    };

    const focusHandler = (): void => {
        setOpened(true);
    };

    const togglerHandler = (): void => {
        setOpened(!opened);
    };

    const renderListItem = (item: T, index: number): JSX.Element => {
        return <div
            key={index}
            onClick={(event) => itemSelectHandler(event, item)}
            className="ui-select-list-item">
            {`${item[dataKey]}`}
        </div>;
    };

    useEffect(() => {
        const closeHandler = (event: MouseEvent): void => {
            if (containerRef.current && !containerRef.current.contains(event.target as HTMLElement)) {
                setOpened(false);
            }
        };

        if (opened) {
            if (onSearch) onSearch(inputValue);
            buttonAnimationController.start({ rotate: 180, transition: { duration: 0.1, ease: 'backInOut' } });

            window.addEventListener('click', closeHandler);
            return () => window.removeEventListener('click', closeHandler);
        } else {
            if (!selected) {
                setSelected(value);
                setInputValue(value ? `${value[dataKey]}` : '');
                setFilteredData(data.filter(item => `${item[dataKey]}`.match(value ? `${value[dataKey]}` : '')));
            } else {
                setFilteredData(data.filter(item => `${item[dataKey]}`.match(inputValue)));
            }
            buttonAnimationController.start({ rotate: 0, transition: { duration: 0.1, ease: 'backInOut' } });
        }

    }, [opened]);

    useEffect(() => {
        setFilteredData(data.filter(item => `${item[dataKey]}`.match(inputValue)));
    }, [data]);

    useEffect(() => {
        setSelected(value);
        setInputValue(value ? `${value[dataKey]}` : '');
        setFilteredData(data.filter(item => `${item[dataKey]}`.match(value ? `${value[dataKey]}` : '')));
    }, [value]);

    return (
        <SelectContainerElement color={color} invert={invert} ref={containerRef} className={`ui-select-container-${containerType || 'downline'}`}>
            <InputElement value={inputValue} onChange={inputChangeHandler} onFocus={focusHandler} placeholder={placeholder} />
            <Button buttonType="icon" icon="chevronDown" iconSize="20px" onClick={togglerHandler} animate={buttonAnimationController} />
            {opened &&

                <SelectListElement color={color} invert={invert} className={`ui-select-list-container`}>
                    {filteredData.map(renderListItem)}
                    {loading &&
                        <div className="ui-select-list-loading">
                            <Spinners.circles width="40px" height="40px" />
                            <span>Carregando mais dados...</span>
                        </div>
                    }
                    {!loading && filteredData.length < 1 &&
                        <div className="ui-select-list-loading">
                            <span>Nenhum item encontrado</span>
                        </div>
                    }
                </SelectListElement>
            }
        </SelectContainerElement>
    );
}