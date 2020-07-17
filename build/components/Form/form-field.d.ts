/// <reference types="react" />
import { InputProps } from '../Input';
import InputValidator from '../../services/input-validator/input-validator';
export interface FormFieldProps extends InputProps {
    key: string;
    onValidationChange: (value: false | string[]) => void;
    validators: InputValidator[];
}
export default function FormField(props: FormFieldProps): JSX.Element;
