/// <reference types="react" />
import { InputProps } from '../Input';
import InputValidator from '../../services/input-validator/input-validator';
import { FieldState } from '.';
export interface FormFieldProps extends InputProps {
    state: FieldState;
    validators: InputValidator[];
}
export default function FormField(props: FormFieldProps): JSX.Element;
