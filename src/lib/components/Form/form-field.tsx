import React, { useState, useEffect } from 'react';
import Input, { InputProps } from '../Input';
import InputValidator from '../../services/input-validator/input-validator';
import { validate } from '../../services/input-validator';
import { FieldState } from '.';

export interface FormFieldProps extends InputProps {
	state: FieldState;
	validators: InputValidator[];
}

export default function FormField(props: FormFieldProps): JSX.Element {
	const [color, setColor] = useState<string | undefined>(props.color);
	const [iconRight, setIconRight] = useState<string | undefined>(
		props.iconRight
	);
	const [state, setState] = props.state;

	const blurHandler = (event: React.FocusEvent<HTMLInputElement>): void => {
		setState({ ...state, validated: true });
		if (props.onBlur) props.onBlur(event);
	};

	const changeHandler = (
		event: React.ChangeEvent<HTMLInputElement>
	): void => {
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
	}, [state.hasError, state.validated]);

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
