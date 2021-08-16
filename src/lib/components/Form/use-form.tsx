import React from 'react';
import { validate } from '../../services/input-validator';
import { InputProps } from '../Input';
import { FormField } from './form-field';
import {
	Form,
	FormElements,
	FormFieldProps,
	FormMemory,
	FormPrototype,
} from './types';

const formMemory: FormMemory = {};
export function useForm<T extends FormPrototype>(
	fields: FormFieldProps<T>[],
	formKey = 'formKey'
): Form<T> {
	if (!formMemory[formKey]) formMemory[formKey] = {};
	const fieldStates = formMemory[formKey];

	const formElements: FormElements<T> = fields.reduce(
		(res, { key, validators, initialValue }) => {
			return {
				...res,
				// eslint-disable-next-line
				[key]: (props: InputProps): JSX.Element => (
					<FormField
						{...props}
						validators={validators}
						initialValue={initialValue || ''}
						formState={fieldStates}
						stateKey={key}
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
