/// <reference types="react" />
import { InputProps } from '../Input';
import InputValidator from '../../services/input-validator/input-validator';
declare type Field = {
    initial?: string;
    inputProps?: InputProps;
    key: string;
    validators: InputValidator[];
};
declare type FieldState = {
    hasError: false | string[];
    validated?: boolean;
    value: string;
};
declare type Form = [JSX.Element | JSX.Element[], () => null | {
    [key: string]: string;
}, () => {
    [key: string]: string;
}, {
    [key: string]: FieldState;
}];
export default function useForm(fields: Field[]): Form;
export {};
