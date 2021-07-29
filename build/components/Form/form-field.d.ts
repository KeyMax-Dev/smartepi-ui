/// <reference types="react" />
import { InputProps } from '../Input';
import { InputValidator } from '../../services/input-validator';
import { FormFieldState } from './types';
export interface FormFieldProps extends InputProps {
    state: FormFieldState;
    validators: InputValidator[];
}
export declare function FormField(props: FormFieldProps): JSX.Element;
