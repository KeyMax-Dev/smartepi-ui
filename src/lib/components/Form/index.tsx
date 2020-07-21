import React, { useState } from 'react';
import FormField from './form-field';
import { InputProps } from '../Input';
import InputValidator from '../../services/input-validator/input-validator';
import { validate } from './../../services/input-validator/index';

type Field = {
    key: string;
    inputProps?: InputProps;
    validators: InputValidator[];
}

type FieldState = {
    value: string;
    validated?: boolean;
    hasError: false | string[];
}

type Form = [
    JSX.Element | JSX.Element[],
    () => null | { [key: string]: string },
    () => { [key: string]: string },
    { [key: string]: FieldState }
];

export default function useForm(fields: Field[]): Form {

    const [fieldStates, setFieldStates] = useState<{ [key: string]: FieldState }>(
        fields.reduce((obj, cur) => ({ ...obj, [cur.key]: { value: '', hasError: validate('', ...cur.validators) } }), {})
    );

    const validationChangeHandler = (key: string, hasError: false | string[]) => {
        const state = { ...fieldStates[key], hasError };
        setFieldStates({ ...fieldStates, [key]: state });
    };

    const valueChangeHandler = (key: string, value: string) => {
        const state = { ...fieldStates[key], value };
        setFieldStates({ ...fieldStates, [key]: state });
    };

    const formElement = fields.map(({ key, inputProps, validators }) =>
        <FormField
            {...inputProps}
            key={key}
            onValidationChange={(value) => validationChangeHandler(key, value)}
            onChange={(event) => valueChangeHandler(key, event.target.value)}
            value={fieldStates[key].value}
            validators={validators}
            validated={fieldStates[key].validated}
        />
    );

    const getErrors = (): null | { [key: string]: string } => {
        let newFieldStates = {};
        let hasError = {};
        for (const key in fieldStates) {
            const state = { ...fieldStates[key], validated: true };
            newFieldStates = { ...newFieldStates, [key]: state };
            if (fieldStates[key].hasError) hasError = { ...hasError, [key]: fieldStates[key].hasError };
        }

        setFieldStates(newFieldStates);
        if (Object.entries(hasError).length > 0) return hasError;
        else return null;
    };

    const getValues = () => {
        return Object.entries(fieldStates).reduce((obj, curr) => ({ ...obj, [curr[0]]: curr[1].value }), {});
    };

    return [formElement, getErrors, getValues, fieldStates];
}