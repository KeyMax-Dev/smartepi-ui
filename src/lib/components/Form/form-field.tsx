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
    const [validated, setValidated] = useState<boolean>(false);

    const blurValidationHandler = (event: React.FocusEvent<HTMLInputElement>) => {
        const validation = validate(event.target.value, ...props.validators);

        if (validation) {
            setColor('danger');
            setValidated(false);
        }
        props.onValidationChange(validation);
        if (props.onBlur) props.onBlur(event);
    };

    const changeValidationHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        const validation = validate(event.target.value, ...props.validators);

        if (validation) {
            if (validated) setColor('danger');
        } else {
            setColor(props.color);
            setValidated(true);
        }

        props.onValidationChange(validation);
        if (props.onChange) props.onChange(event);
    };

    return <Input {...props} color={color} onBlur={blurValidationHandler} onChange={changeValidationHandler} />;
}