import Input from '../Input';
import InputValidator from '../../services/input-validator/input-validator';
import { Dispatch, SetStateAction } from 'react';
export declare type FormPrototype = {
    [key: string]: string | number | undefined | Date;
};
export declare type FormFieldProps<T extends FormPrototype> = {
    key: keyof T;
    validators: InputValidator[];
    initialValue?: string;
};
export declare type FormFieldType = {
    hasError: false | string[];
    validated?: boolean;
    value: string;
    validators: InputValidator[];
};
export declare type FormFieldState = [FormFieldType, Dispatch<SetStateAction<FormFieldType>>];
export declare type FormState<T extends FormPrototype> = {
    [K in keyof T]: FormFieldState;
};
export declare type FormElements<T extends FormPrototype> = {
    [key in keyof T]: typeof Input;
};
export declare type FormErrors<T extends FormPrototype> = null | {
    [K in keyof T]?: string[];
};
export declare type Form<T extends FormPrototype> = [FormElements<T>, () => FormErrors<T>, () => T, FormState<T>];
