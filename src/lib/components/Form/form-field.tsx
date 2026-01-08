import type React from 'react';
import { useEffect, useState } from 'react';
import { type InputValidator, validate } from '../../services/input-validator';
import Input, { type InputProps } from '../Input';
import type { FormFieldType, FormPrototype, FormState } from './types';

export interface FormFieldProps<T extends FormPrototype> extends InputProps {
	formState: FormState<T>;
	validators: InputValidator[];
	initialValue: string;
	stateKey: keyof T;
}

export function FormField<T extends FormPrototype>(
	props: FormFieldProps<T>,
): JSX.Element {
	const [color, setColor] = useState<string | undefined>(props.color);
	const [iconRight, setIconRight] = useState<string | undefined>(
		props.iconRight,
	);
	const [state, setState] = useState<FormFieldType>(
		props.formState[props.stateKey]
			? props.formState[props.stateKey][0]
			: {
					hasError: validate(props.initialValue, ...props.validators),
					value: props.initialValue,
					validators: props.validators,
				},
	);

	const blurHandler = (event: React.FocusEvent<HTMLInputElement>): void => {
		setState({ ...state, validated: true });
		if (props.onBlur) props.onBlur(event);
	};

	const changeHandler = (event: React.ChangeEvent<HTMLInputElement>): void => {
		setState({
			...state,
			value: event.target.value,
			hasError: validate(event.target.value, ...props.validators),
		});
		if (props.onChange) props.onChange(event);
	};

	useEffect(() => {
		if (state.hasError && state.validated) {
			setColor('danger');
			setIconRight('alert');
			setState({ ...state, validated: true });
		} else {
			setColor(props.color);
			setIconRight(props.iconRight);
		}
	}, [state.hasError, state.validated, props.iconRight, props.color, state]);

	useEffect(() => {
		props.formState[props.stateKey] = [state, setState];
	});

	return (
		<Input
			{...props}
			color={color}
			iconRight={iconRight}
			onBlur={blurHandler}
			onChange={changeHandler}
			className={`ui-form-input ${props.className}`}
			value={state.value}
		/>
	);
}
