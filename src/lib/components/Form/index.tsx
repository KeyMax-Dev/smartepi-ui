import React, { useState } from 'react';
import FormField from './form-field';
import { InputProps } from '../Input';
import InputValidator from '../../services/input-validator/input-validator';
import { validate } from './../../services/input-validator/index';

type FormPrototype = { [key: string]: string | number | undefined | Date };

type Field<T extends FormPrototype> = {
    initial?: string;
    inputProps?: InputProps;
    key: keyof T;
    validators: InputValidator[];
}

type FieldState = {
    hasError: false | string[];
    validated?: boolean;
    value: string;
    validators: InputValidator[];
}

type FieldStates<T extends FormPrototype> = { [K in keyof T]: FieldState };


type Form<T extends FormPrototype> = [
    JSX.Element | JSX.Element[],
    () => null | { [K in keyof T]?: string[] },
    () => T,
    FieldStates<T>
];

export default function useForm<T extends FormPrototype>(fields: Field<T>[]): Form<T> {

    const [fieldStates, setFieldStates] = useState<{ [K in keyof T]: FieldState }>(
        fields.reduce((obj, cur) => ({ ...obj,
            [cur.key]: { value: cur.initial || '', hasError: validate(cur.initial || '', ...cur.validators), validators: cur.validators } }),
            {} as { [K in keyof T]: FieldState })
    );

    const validationChangeHandler = (key: string, hasError: false | string[]): void => {
        const state = { ...fieldStates[key], hasError };
        setFieldStates({ ...fieldStates, [key]: state });
    };

    const valueChangeHandler = (key: string, value: string): void => {
        const state = { ...fieldStates[key], value };
        setFieldStates({ ...fieldStates, [key]: state });
    };

    const formElement = fields.map(({ key, inputProps, validators }) =>
        <FormField
            {...inputProps}
            key={key as string}
            onValidationChange={(value) => validationChangeHandler(key as string, value)}
            onChange={(event) => valueChangeHandler(key as string, event.target.value)}
            value={fieldStates[key].value}
            validators={validators}
            validated={fieldStates[key].validated}
        />
    );

    const getErrors = (): null | { [K in keyof T]?: string[] } => {
        let newFieldStates: FieldStates<T> = {} as FieldStates<T>;
        let hasError: { [K in keyof T]?: string[] } = {};
        for (const key in fieldStates) {
            fieldStates[key].hasError = validate(fieldStates[key].value, ...fieldStates[key].validators);
            const state = { ...fieldStates[key], validated: true };
            newFieldStates = { ...newFieldStates, [key]: state };
            if (fieldStates[key].hasError) hasError = { ...hasError, [key]: fieldStates[key].hasError };
        }

        setFieldStates(newFieldStates);
        if (Object.entries(hasError).length > 0) return hasError;
        else return null;
    };

    const getValues = (): T => {
        return Object.entries(fieldStates).reduce((obj, curr) => ({ ...obj, [curr[0]]: curr[1].value }), {} as T);
    };

    return [formElement, getErrors, getValues, fieldStates];
}