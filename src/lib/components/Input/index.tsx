import type { HTMLMotionProps } from 'framer-motion';
import type React from 'react';
import { type FocusEvent, useEffect, useRef, useState } from 'react';
import { Datepicker, useOverflow } from '../..';
import Button from '../Button';
import Icon from '../Icon';
import {
	InputContainerElement,
	InputElement,
	InputLabelElement,
} from './style';

type ContainerType = 'outline' | 'downline';
const DEFAULT_TYPE: ContainerType = 'downline';

export interface InputProps extends HTMLMotionProps<'input'> {
	color?: string;
	containerProps?: HTMLMotionProps<'div'>;
	containerType?: ContainerType;
	enableClear?: boolean;
	enableDatepicker?: boolean;
	getRef?: (
		input: React.MutableRefObject<HTMLInputElement> | undefined,
	) => void;
	iconLeft?: string;
	iconRight?: string;
	invert?: boolean;
}

export default function Input(props: InputProps): JSX.Element {
	const {
		containerProps,
		containerType: propsContainerType,
		enableClear,
		enableDatepicker,
		getRef,
		iconLeft,
		iconRight,
		invert,
		color,
		...inputMotionProps
	} = props;

	const containerType: ContainerType = propsContainerType || DEFAULT_TYPE;
	const inputRef = useRef<HTMLInputElement>(null);
	const [isFocused, setIsFocused] = useState<boolean>(false);

	const clear = (): void => {
		if (inputRef.current) {
			const input = inputRef.current as HTMLInputElement;
			const setValue = Object.getOwnPropertyDescriptor(
				window.HTMLInputElement.prototype,
				'value',
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
				'value',
			)?.set;
			if (setValue) {
				setValue.call(input, date.toLocaleDateString('pt-br'));
				input.dispatchEvent(new Event('input', { bubbles: true }));
				// datepicker.close();
			}
		}
	};
	const datepicker = useOverflow(
		<Datepicker onDaySelected={onDatepickerSelect} />,
	);

	const onFocus = (event: FocusEvent<HTMLInputElement>): void => {
		setIsFocused(true);
		if (inputMotionProps.onFocus) inputMotionProps.onFocus(event);
	};

	const onBlur = (event: FocusEvent<HTMLInputElement>): void => {
		setIsFocused(false);
		if (inputMotionProps.onBlur) inputMotionProps.onBlur(event);
	};

	useEffect(() => {
		if (getRef) getRef(inputRef as React.RefObject<HTMLInputElement>);
	}, [getRef]);

	const hasText = !!inputRef.current?.value?.length || !!inputMotionProps.value;

	return (
		<InputContainerElement
			{...containerProps}
			invert={invert}
			color={color}
			className={`ui-input-container-${containerType} ${
				containerProps?.className || ''
			}`}
		>
			{inputMotionProps.placeholder && (
				<InputLabelElement
					active={isFocused || hasText}
					color={color}
					invert={invert}
				>
					<div>{inputMotionProps.placeholder}</div>
				</InputLabelElement>
			)}
			{iconLeft && (
				<Icon
					color={color}
					name={iconLeft}
					invert={invert}
					width="25px"
					height="25px"
					className="__icon-left"
				/>
			)}
			<InputElement
				{...inputMotionProps}
				ref={inputRef as React.RefObject<HTMLInputElement>}
				disabled={enableDatepicker}
				onFocus={onFocus}
				onBlur={onBlur}
			/>
			{enableClear && hasText && (
				<Button
					buttonType="icon"
					icon="close"
					onClick={clear}
					iconSize="25px"
					invert={invert}
					className="__icon-right"
				/>
			)}
			{enableDatepicker && (
				<Button
					buttonType="icon"
					icon="calendar"
					invert={invert}
					onClick={(event) =>
						datepicker.open(event.currentTarget as HTMLElement)
					}
					iconSize="25px"
					className="__icon-right"
				/>
			)}
			{iconRight && (
				<Icon
					color={color}
					name={iconRight}
					invert={invert}
					width="25px"
					height="25px"
					className="__icon-right"
				/>
			)}
		</InputContainerElement>
	);
}
