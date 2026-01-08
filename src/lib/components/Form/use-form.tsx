import { useEffect } from 'react';
import type { InputValidator } from '../../services/input-validator';
import type { InputProps } from '../Input';
import { FormField } from './form-field';
import type {
	Form,
	FormElements,
	FormFieldProps,
	FormMemory,
	FormPrototype,
} from './types';

const formMemory: FormMemory = {};

// Helper to normalize validators
type ValidatorFunction = (value: any) => string | null;
type ValidatorInput = InputValidator | ValidatorFunction;

function validateValue(
	value: any,
	validators: ValidatorInput[],
): string[] | false {
	const errors: string[] = [];

	validators.forEach((validator) => {
		if (typeof validator === 'function') {
			// Handle function validators directly
			const error = validator(value);
			if (error !== null) {
				errors.push(error);
			}
		} else {
			// Handle object validators with validate method
			if (!validator.validate(value)) {
				errors.push(validator.errorName);
			}
		}
	});

	return errors.length > 0 ? errors : false;
}

// Nova API: aceita objeto
function useFormObject<T extends FormPrototype>(
	fields: { [K in keyof T]: { value: any; validators?: ValidatorInput[] } },
	formKey: string,
) {
	if (!formMemory[formKey]) formMemory[formKey] = {};
	const fieldStates = formMemory[formKey];

	// Inicializar estados dos campos
	for (const key in fields) {
		if (!fieldStates[key]) {
			const field = fields[key];
			fieldStates[key] = [
				{
					value: field.value,
					hasError: false,
					validated: false,
					validators: field.validators || [],
				},
				() => {},
			] as any;
		}
	}

	const validateForm = (): boolean => {
		let hasErrors = false;
		for (const key in fields) {
			const [state] = fieldStates[key];
			const validators = fields[key].validators || [];
			const error = validateValue(state.value, validators);
			if (error) hasErrors = true;
		}
		return !hasErrors;
	};

	const getValues = (): T => {
		const result: any = {};
		for (const key in fields) {
			const [state] = fieldStates[key];
			result[key] = state.value;
		}
		return result;
	};

	const reset = (): void => {
		for (const key in fields) {
			fieldStates[key][0].value = fields[key].value;
			fieldStates[key][0].hasError = false;
			fieldStates[key][0].validated = false;
		}
	};

	const getFieldProps = (key: keyof T) => {
		const [state] = fieldStates[key as string];
		return {
			value: state.value,
			onChange: (e: any) => {
				state.value = e.target?.value ?? e;
			},
		};
	};

	useEffect(() => {
		return () => {
			formMemory[formKey] = {};
		};
	}, [formKey]);

	return { validate: validateForm, getValues, reset, getFieldProps };
}

// Sobrecarga: aceita objeto com estrutura { field: { value, validators } }
export function useForm<T extends FormPrototype>(
	fields: { [K in keyof T]: { value: any; validators?: ValidatorInput[] } },
	formKey?: string,
): {
	validate: () => boolean;
	getValues: () => T;
	reset: () => void;
	getFieldProps: (key: keyof T) => any;
};

// Sobrecarga original: aceita array
export function useForm<T extends FormPrototype>(
	fields: FormFieldProps<T>[],
	formKey?: string,
): Form<T>;

// Implementação
export function useForm<T extends FormPrototype>(
	fields: any,
	formKey = 'formKey',
): any {
	// Se fields é um objeto (não array), usar nova API
	if (!Array.isArray(fields)) {
		return useFormObject(fields, formKey);
	}

	// API antiga (array)
	if (!formMemory[formKey]) formMemory[formKey] = {};
	const fieldStates = formMemory[formKey];

	const formElements: FormElements<T> = fields.reduce(
		(res, { key, validators, initialValue }) => {
			res[key] = (props: InputProps): React.ReactElement => (
				<FormField
					{...props}
					validators={validators}
					initialValue={initialValue || ''}
					formState={fieldStates}
					stateKey={key}
				/>
			);
			return res;
		},
		{} as FormElements<T>,
	);

	const getErrors = (): null | { [K in keyof T]?: string[] } => {
		let totalErrors: { [K in keyof T]?: string[] } = {};
		for (const key in fieldStates) {
			const [state, setState] = fieldStates[key];

			const hasError = validateValue(state.value, state.validators);

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
			(obj as Record<string, unknown>)[key] = state.value;
			return obj;
		}, {} as T);
	};

	useEffect(() => {
		return () => {
			formMemory[formKey] = {};
		};
	}, [formKey]);

	return [formElements, getErrors, getValues, fieldStates];
}
