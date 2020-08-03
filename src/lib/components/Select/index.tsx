import React, { useState, useEffect, useRef } from 'react';
import { SelectContainerElement, SelectListElement } from './style';
import { InputElement } from '../Input/style';import Spinners from '../../assets/svgs/spinners';
import Button from '../Button';
import { useAnimation } from 'framer-motion';

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
}

const SEARCH_LIMIT_TIME = 500;
let SEARCH_TIMER: number;

export default function Select<T>({ data, dataKey, loading, onSelect, onSearch, value, color, invert, placeholder }: SelectProps<T>): JSX.Element {

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

        clearTimeout(SEARCH_TIMER);
        SEARCH_TIMER = setTimeout(() => {
            setFilteredData(data.filter(item => `${item[dataKey]}`.match(value)));
            if (onSearch) onSearch(value);
        }, SEARCH_LIMIT_TIME);
    };

    const focusHandler = () => {
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
            if (containerRef.current && !containerRef.current.contains(event.target as HTMLElement)) {
                setOpened(false);
            }
        };

        if (opened) {
            buttonAnimationController.start({ rotate: 180, transition: { duration: 0.1, ease: 'backInOut' } });
            if (onSearch) onSearch(inputValue);

            window.addEventListener('click', closeHandler);
            return () => window.removeEventListener('click', closeHandler);
        } else {
            buttonAnimationController.start({ rotate: 0, transition: { duration: 0.1, ease: 'backInOut' } });
            if (!selected) {
                setInputValue('');
                setFilteredData(data.filter(item => `${item[dataKey]}`.match('')));
            } else {
                setFilteredData(data.filter(item => `${item[dataKey]}`.match(inputValue)));
            }
        }
        
    }, [opened]);

    useEffect(() => {
        setFilteredData(data.filter(item => `${item[dataKey]}`.match(inputValue)));
    }, [data]);

    return (
        <SelectContainerElement color={color} invert={invert} ref={containerRef}>
            <InputElement value={inputValue} onChange={inputChangeHandler} onFocus={focusHandler} placeholder={placeholder} />
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