/// <reference types="react" />
import { InputProps } from '../Input';
import InputValidator from '../../services/input-validator/input-validator';
declare type FormPrototype = {
    [key: string]: string | number | undefined;
};
declare type Field<T extends FormPrototype> = {
    initial?: string;
    inputProps?: InputProps;
    key: keyof T;
    validators: InputValidator[];
};
declare type FieldState = {
    hasError: false | string[];
    validated?: boolean;
    value: string;
};
declare type FieldStates<T extends FormPrototype> = {
    [K in keyof T]: FieldState;
};
declare type Form<T extends FormPrototype> = [JSX.Element | JSX.Element[], () => null | {
    [K in keyof T]?: string[];
}, () => T, FieldStates<T>];
export default function useForm<T extends FormPrototype>(fields: Field<T>[]): Form<T>;
export {};
