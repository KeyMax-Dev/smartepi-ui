import React, { useEffect, useRef, useState, FocusEvent } from 'react';
import Icon from '../Icon';
import { HTMLMotionProps } from 'framer-motion';
import {
	InputElement,
	InputContainerElement,
	InputLabelElement,
} from './style';
import Button from '../Button';
import { useOverflow, Datepicker } from '../..';

type ContainerType = 'outline' | 'downline';
const DEFAULT_TYPE: ContainerType = 'downline';

export interface InputProps extends HTMLMotionProps<'input'> {
	color?: string;
	containerProps?: HTMLMotionProps<'div'>;
	containerType?: ContainerType;
	enableClear?: boolean;
	enableDatepicker?: boolean;
	getRef?: (
		input: React.MutableRefObject<HTMLInputElement> | undefined
	) => void;
	iconLeft?: string;
	iconRight?: string;
	invert?: boolean;
}

export default function Input(props: InputProps): JSX.Element {
	const containerType: ContainerType = props.containerType
		? props.containerType
		: DEFAULT_TYPE;
	const inputRef = useRef<HTMLInputElement>();
	const [isFocused, setIsFocused] = useState<boolean>(false);

	const clear = (): void => {
		if (inputRef.current) {
			const input = inputRef.current as HTMLInputElement;
			const setValue = Object.getOwnPropertyDescriptor(
				window.HTMLInputElement.prototype,
				'value'
			)?.set;
			if (setValue) {
				setValue.call(input, '');
				input.dispatchEvent(new Event('input', { bubbles: true }));
			}
		}
	};

	const onDatepickerSelect = (date: Date): void => {
		if (inputRef.current) {
			const input = inputRef.current as HTMLInputElement;
			const setValue = Object.getOwnPropertyDescriptor(
				window.HTMLInputElement.prototype,
				'value'
			)?.set;
			if (setValue) {
				setValue.call(input, date.toLocaleDateString('pt-br'));
				input.dispatchEvent(new Event('input', { bubbles: true }));
				// eslint-disable-next-line
				// datepicker.close();
			}
		}
	};
	const datepicker = useOverflow(
		<Datepicker onDaySelected={onDatepickerSelect} />
	);

	const onFocus = (event: FocusEvent<HTMLInputElement>): void => {
		setIsFocused(true);
		if (props.onFocus) props.onFocus(event);
	};

	const onBlur = (event: FocusEvent<HTMLInputElement>): void => {
		setIsFocused(false);
		if (props.onBlur) props.onBlur(event);
	};

	useEffect(() => {
		if (props.getRef)
			props.getRef(inputRef as React.MutableRefObject<HTMLInputElement>);
	}, [inputRef.current]);

	const hasText = !!inputRef.current?.value?.length || !!props.value;

	return (
		<InputContainerElement
			{...props.containerProps}
			invert={props.invert}
			color={props.color}
			className={`ui-input-container-${containerType} ${
				props.containerProps?.className || ''
			}`}
		>
			{props.placeholder && (
				<InputLabelElement
					active={isFocused || hasText}
					color={props.color}
					invert={props.invert}
				>
					<div>{props.placeholder}</div>
				</InputLabelElement>
			)}
			{props.iconLeft && (
				<Icon
					color={props.color}
					name={props.iconLeft}
					invert={props.invert}
					width="25px"
					height="25px"
					className="__icon-left"
				/>
			)}
			<InputElement
				{...props}
				ref={inputRef as React.MutableRefObject<HTMLInputElement>}
				disabled={props.enableDatepicker}
				onFocus={onFocus}
				onBlur={onBlur}
			/>
			{props.enableClear && hasText && (
				<Button
					buttonType="icon"
					icon="close"
					onClick={clear}
					iconSize="25px"
					invert={props.invert}
					className="__icon-right"
				/>
			)}
			{props.enableDatepicker && (
				<Button
					buttonType="icon"
					icon="calendar"
					invert={props.invert}
					onClick={(event) =>
						datepicker.open(event.currentTarget as HTMLElement)
					}
					iconSize="25px"
					className="__icon-right"
				/>
			)}
			{props.iconRight && (
				<Icon
					color={props.color}
					name={props.iconRight}
					invert={props.invert}
					width="25px"
					height="25px"
					className="__icon-right"
				/>
			)}
		</InputContainerElement>
	);
}
