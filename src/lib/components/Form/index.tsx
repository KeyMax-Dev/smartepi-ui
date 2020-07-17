import React, { useState } from 'react';
import FormField from './form-field';
import { InputProps } from '../Input';
import InputValidator from '../../services/input-validator/input-validator';
import { validate } from './../../services/input-validator/index';

type Form = [
    JSX.Element | JSX.Element[],
    () => null | { [key: string]: string },
    { [key: string]: { value: string; hasError: false | string[] } }
];

type Field = {
    key: string;
    inputProps?: InputProps;
    validators: InputValidator[];
}

type FieldState = {
    value: string;
    hasError: false | string[];
}

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

    const form = fields.map(({ key, inputProps, validators }) =>
        <FormField
            {...inputProps}
            key={key}
            onValidationChange={(value) => validationChangeHandler(key, value)}
            onChange={(event) => valueChangeHandler(key, event.target.value)}
            value={fieldStates[key].value}
            validators={validators}
        />
    );

    const formValidate = (): null | { [key: string]: string } => {
        for (const key in fieldStates) {
            if (fieldStates[key].hasError) return null;
        }
        return Object.entries(fieldStates).reduce((obj, curr) => ({ ...obj, [curr[0]]: curr[1].value }), {});
    };

    return [form, formValidate, fieldStates];
}