import { Dispatch, SetStateAction } from 'react';
import Input from '../Input';
import InputValidator from '../../services/input-validator/input-validator';
declare type FormPrototype = {
    [key: string]: string | number | undefined | Date;
};
declare type FieldProps<T extends FormPrototype> = {
    key: keyof T;
    validators: InputValidator[];
    initialValue?: string;
};
declare type Field = {
    hasError: false | string[];
    validated?: boolean;
    value: string;
    validators: InputValidator[];
};
export declare type FieldState = [Field, Dispatch<SetStateAction<Field>>];
declare type FormState<T extends FormPrototype> = {
    [K in keyof T]: FieldState;
};
declare type FormElements<T extends FormPrototype> = {
    [key in keyof T]?: typeof Input;
};
declare type Form<T extends FormPrototype> = [FormElements<T>, () => null | {
    [K in keyof T]?: string[];
}, () => T, FormState<T>];
export default function useForm<T extends FormPrototype>(fields: FieldProps<T>[]): Form<T>;
export {};
