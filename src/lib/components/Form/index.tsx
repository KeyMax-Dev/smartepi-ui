import React, { Dispatch, SetStateAction, useState } from 'react';
import FormField from './form-field';
import { InputProps } from '../Input';
import Input from '../Input';
import InputValidator from '../../services/input-validator/input-validator';
import { validate } from './../../services/input-validator/index';

type FormPrototype = { [key: string]: string | number | undefined | Date };

type FieldProps<T extends FormPrototype> = {
	key: keyof T;
	validators: InputValidator[];
	initialValue?: string;
};

type Field = {
	hasError: false | string[];
	validated?: boolean;
	value: string;
	validators: InputValidator[];
};

export type FieldState = [Field, Dispatch<SetStateAction<Field>>];

type FormState<T extends FormPrototype> = { [K in keyof T]: FieldState };

type FormElements<T extends FormPrototype> = {
	[key in keyof T]: typeof Input;
};

type Form<T extends FormPrototype> = [
	FormElements<T>,
	() => null | { [K in keyof T]?: string[] },
	() => T,
	FormState<T>
];

const FormElement = <T extends FormPrototype>(
	props: InputProps & {
		formState: FormState<T>;
		id: keyof T;
		validators: InputValidator[];
		initialValue: string;
	}
): JSX.Element => {
	const state = useState<Field>({
		hasError: validate(props.initialValue, ...props.validators),
		value: props.initialValue,
		validators: props.validators,
	});
	props.formState[props.id] = state;
	return <FormField {...props} state={state} />;
};

export default function useForm<T extends FormPrototype>(
	fields: FieldProps<T>[]
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
