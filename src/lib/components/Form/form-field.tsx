import React, { useState, useEffect } from 'react';
import Input, { InputProps } from '../Input';
import InputValidator, { InputValueType } from '../../services/input-validator/input-validator';
import { validate } from '../../services/input-validator';

export interface FormFieldProps extends InputProps {
    key: string;
    onValidationChange: (value: false | string[]) => void;
    validators: InputValidator[];
    validated?: boolean;
}

export default function FormField(props: FormFieldProps): JSX.Element {

    const [color, setColor] = useState<string | undefined>(props.color);
    const [iconRight, setIconRight] = useState<string | undefined>(props.iconRight);
    const [validated, setValidated] = useState<boolean>(props.validated || false);

    const validateField = (value: InputValueType, forceErrorState?: boolean): false | string[] => {
        const validation = validate(value, ...props.validators);

        if (validation) {
            if (validated || forceErrorState) {
                setColor('danger');
                setIconRight('alert');
                setValidated(true);
            }
        } else {
            setColor(props.color);
            setIconRight(props.iconRight);
            if (!validated) setValidated(true);
        }

        props.onValidationChange(validation);
        return validation;
    };

    const blurValidationHandler = (event: React.FocusEvent<HTMLInputElement>): void => {
        validateField(event.target.value, true);
        if (props.onBlur) props.onBlur(event);
    };

    const changeValidationHandler = (event: React.ChangeEvent<HTMLInputElement>): void => {
        validateField(event.target.value);
        if (props.onChange) props.onChange(event);
    };

    useEffect(() => {
        if (props.validated) {
            validateField(props.value || '', props.validated);
        }
    }, [props.validated]);

    return <Input
        {...props}
        color={color}
        iconRight={iconRight}
        onBlur={blurValidationHandler}
        onChange={changeValidationHandler}
        className={`ui-form-input ${props.className}`}
    />;
}