/// <reference types="react" />
import { InputProps } from '../Input';
import InputValidator from '../../services/input-validator/input-validator';
declare type Field = {
    key: string;
    inputProps?: InputProps;
    validators: InputValidator[];
};
declare type FieldState = {
    value: string;
    validated?: boolean;
    hasError: false | string[];
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
