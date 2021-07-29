import React, { useState, useEffect, useRef } from 'react';
import { SelectContainerElement, SelectListElement } from './style';
import { InputElement, InputLabelElement } from '../Input/style';
import Spinners from '../../assets/svgs/spinners';
import Button from '../Button';
import { useAnimation } from 'framer-motion';
import { SelectProps } from './types';

const SEARCH_LIMIT_TIME = 500;
let SEARCH_TIMER: number;

export function Select<T>({
	data,
	dataKey,
	loading,
	onSelect,
	onSearch,
	onOpen,
	onClose,
	value,
	color,
	invert,
	placeholder,
	containerType,
	enableClear,
}: SelectProps<T>): JSX.Element {
	const [inputValue, setInputValue] = useState<string>(
		value ? `${value[dataKey]}` : ''
	);
	const [selected, setSelected] = useState<T | undefined>(value);
	const [opened, setOpened] = useState<boolean>(false);
	const [filteredData, setFilteredData] = useState<T[]>(data);
	const buttonAnimationController = useAnimation();
	const containerRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (value) {
			setInputValue(`${value[dataKey]}`);
		}
	}, [value]);

	const itemSelectHandler = (
		event: React.MouseEvent<HTMLDivElement>,
		item: T
	): void => {
		setSelected(item);
		setInputValue(`${item[dataKey]}`);
		setOpened(false);
		if (onSelect) onSelect(event, item);
	};

	const inputChangeHandler = (
		event: React.ChangeEvent<HTMLInputElement>
	): void => {
		const value = `${event.target.value}`;
		setInputValue(value);
		setSelected(undefined);

		setFilteredData(
			data.filter((item) =>
				`${item[dataKey]}`
					.toLocaleLowerCase()
					.match(value.toLocaleLowerCase())
			)
		);

		clearTimeout(SEARCH_TIMER);
		SEARCH_TIMER = setTimeout(() => {
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
		return (
			<div
				key={index}
				onClick={(event) => itemSelectHandler(event, item)}
				className="ui-select-list-item"
			>
				{`${item[dataKey]}`}
			</div>
		);
	};

	useEffect(() => {
		const closeHandler = (event: MouseEvent): void => {
			if (
				containerRef.current &&
				!containerRef.current.contains(event.target as HTMLElement)
			) {
				setOpened(false);
			}
		};

		if (opened) {
			if (onOpen) onOpen();
			if (onSearch) onSearch('');
			buttonAnimationController.start({
				rotate: 180,
				transition: { duration: 0.1, ease: 'backInOut' },
			});

			setFilteredData(data);
			setInputValue('');

			window.addEventListener('click', closeHandler);
			return () => window.removeEventListener('click', closeHandler);
		} else {
			if (onClose) onClose();
			if (!selected) {
				console.log('git', value);
				setSelected(value);
				setFilteredData(data);
			}
			setInputValue(value ? `${value[dataKey]}` : '');
			buttonAnimationController.start({
				rotate: 0,
				transition: { duration: 0.1, ease: 'backInOut' },
			});
		}
	}, [opened]);

	useEffect(() => {
		if (!loading) {
			setFilteredData(
				data.filter((item) =>
					`${item[dataKey]}`
						.toLocaleLowerCase()
						.match(inputValue.toLocaleLowerCase())
				)
			);
		}
	}, [data]);

	useEffect(() => {
		setSelected(value);
		setInputValue(value ? `${value[dataKey]}` : '');
	}, [value]);

	return (
		<SelectContainerElement
			color={color}
			invert={invert}
			ref={containerRef}
			className={`ui-select-container-${containerType || 'downline'}`}
		>
			{placeholder && (
				<InputLabelElement
					active={!!selected || opened}
					color={color}
					invert={invert}
				>
					<div>{placeholder}</div>
				</InputLabelElement>
			)}
			<InputElement
				value={inputValue}
				onChange={inputChangeHandler}
				onFocus={focusHandler}
				placeholder={placeholder}
			/>
			<Button
				buttonType="icon"
				icon="chevronDown"
				iconSize="20px"
				onClick={togglerHandler}
				animate={buttonAnimationController}
				className="ui-select-button"
			/>
			{opened && (
				<SelectListElement
					color={color}
					invert={invert}
					className={`ui-select-list-container`}
				>
					{filteredData.map(renderListItem)}
					{loading && (
						<div className="ui-select-list-loading">
							<Spinners.circles width="40px" height="40px" />
							<span>Carregando mais dados...</span>
						</div>
					)}
					{!loading && filteredData.length < 1 && (
						<div className="ui-select-list-loading">
							<span>Nenhum item encontrado</span>
						</div>
					)}
				</SelectListElement>
			)}
			{enableClear && selected && (
				<Button
					buttonType="icon"
					icon="close"
					// @ts-expect-error
					onClick={(event) => onSelect && onSelect(event, undefined)}
					iconSize="25px"
					invert={invert}
					className="ui-icon-right"
				/>
			)}
		</SelectContainerElement>
	);
}
