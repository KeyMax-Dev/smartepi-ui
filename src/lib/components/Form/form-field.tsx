import React, { useState } from 'react';
import Input, { InputProps } from '../Input';
import InputValidator from '../../services/input-validator/input-validator';
import { validate } from '../../services/input-validator';

export interface FormFieldProps extends InputProps {
    key: string;
    onValidationChange: (value: false | string[]) => void;
    validators: InputValidator[];
}

export default function FormField(props: FormFieldProps): JSX.Element {

    const [color, setColor] = useState<string | undefined>(props.color);
    const [iconRight, setIconRight] = useState<string | undefined>(props.iconRight);
    const [validated, setValidated] = useState<boolean>(false);

    const blurValidationHandler = (event: React.FocusEvent<HTMLInputElement>) => {
        const validation = validate(event.target.value, ...props.validators);

        if (validation) {
            setColor('danger');
            setIconRight('alert');
            setValidated(false);
        }
        props.onValidationChange(validation);
        if (props.onBlur) props.onBlur(event);
    };

    const changeValidationHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        const validation = validate(event.target.value, ...props.validators);

        if (validation) {
            if (validated) {
                setColor('danger');
                setIconRight('alert');
            };
        } else {
            setColor(props.color);
            setIconRight(props.iconRight);
            setValidated(true);
        }

        props.onValidationChange(validation);
        if (props.onChange) props.onChange(event);
    };

    return <Input {...props} color={color} iconRight={iconRight} onBlur={blurValidationHandler} onChange={changeValidationHandler} />;
}