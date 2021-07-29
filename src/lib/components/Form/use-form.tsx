import React, { useState } from 'react';
import { InputValidator, validate } from '../../services/input-validator';
import { InputProps } from '../Input';
import {
	FormFieldType,
	FormPrototype,
	FormState,
	FormFieldProps,
	FormElements,
	Form,
} from './types';
import { FormField } from './form-field';

const FormElement = <T extends FormPrototype>(
	props: InputProps & {
		formState: FormState<T>;
		id: keyof T;
		validators: InputValidator[];
		initialValue: string;
	}
): JSX.Element => {
	const state = useState<FormFieldType>({
		hasError: validate(props.initialValue, ...props.validators),
		value: props.initialValue,
		validators: props.validators,
	});
	props.formState[props.id] = state;
	return <FormField {...props} state={state} />;
};

export function useForm<T extends FormPrototype>(
	fields: FormFieldProps<T>[]
): Form<T> {
	const fieldStates = {} as FormState<T>;

	const formElements: FormElements<T> = fields.reduce(
		(res, { key, validators, initialValue }) => {
			return {
				...res,
				// eslint-disable-next-line
				[key]: (props: InputProps): JSX.Element => (
					<FormElement
						{...props}
						formState={fieldStates}
						id={`${key}`}
						validators={validators}
						initialValue={initialValue || ''}
					/>
				),
			};
		},
		{} as FormElements<T>
	);

	const getErrors = (): null | { [K in keyof T]?: string[] } => {
		let totalErrors: { [K in keyof T]?: string[] } = {};
		for (const key in fieldStates) {
			const [state, setState] = fieldStates[key];

			const hasError = validate(state.value, ...state.validators);

			setState({ ...state, hasError, validated: true });
			if (hasError) {
				totalErrors = {
					...totalErrors,
					[key]: state.hasError,
				};
			}
		}

		if (Object.entries(totalErrors).length > 0) return totalErrors;
		else return null;
	};

	const getValues = (): T => {
		return Object.entries(fieldStates).reduce((obj, [key, [state]]) => {
			return { ...obj, [key]: state.value };
		}, {} as T);
	};

	return [formElements, getErrors, getValues, fieldStates];
}
