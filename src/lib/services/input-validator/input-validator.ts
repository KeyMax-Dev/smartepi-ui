
export type InputValueType = string | number | readonly string[] | undefined;

interface InputValidator {
    errorName: string;
    validate(text: InputValueType): boolean;
}

export default InputValidator;