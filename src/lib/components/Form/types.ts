import Input from '../Input';
import InputValidator from '../../services/input-validator/input-validator';
import { Dispatch, SetStateAction } from 'react';

export type FormPrototype = {
	[key: string]: string | number | undefined | Date;
};

export type FormFieldProps<T extends FormPrototype> = {
	key: keyof T;
	validators: InputValidator[];
	initialValue?: string;
};

export type FormFieldType = {
	hasError: false | string[];
	validated?: boolean;
	value: string;
	validators: InputValidator[];
};

export type FormFieldState = [
	FormFieldType,
	Dispatch<SetStateAction<FormFieldType>>
];

export type FormState<T extends FormPrototype> = {
	[K in keyof T]: FormFieldState;
};

export type FormElements<T extends FormPrototype> = {
	[key in keyof T]: typeof Input;
};

export type FormErrors<T extends FormPrototype> =
	| null
	| { [K in keyof T]?: string[] };

export type Form<T extends FormPrototype> = [
	FormElements<T>,
	() => FormErrors<T>,
	() => T,
	FormState<T>
];
