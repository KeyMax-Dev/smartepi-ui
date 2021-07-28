import InputValidator, { InputValueType } from './input-validator';
import Validators from './default-validators';
declare const validate: (value: InputValueType, ...validators: InputValidator[]) => string[] | false;
export { validate, Validators };
export type { InputValidator };
