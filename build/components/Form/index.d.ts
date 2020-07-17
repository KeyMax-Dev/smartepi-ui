/// <reference types="react" />
import { InputProps } from '../Input';
import InputValidator from '../../services/input-validator/input-validator';
declare type Form = [JSX.Element | JSX.Element[], () => null | {
    [key: string]: string;
}, {
    [key: string]: {
        value: string;
        hasError: false | string[];
    };
}];
declare type Field = {
    key: string;
    inputProps?: InputProps;
    validators: InputValidator[];
};
export default function useForm(fields: Field[]): Form;
export {};
