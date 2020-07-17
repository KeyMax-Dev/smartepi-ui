import InputValidator from "./input-validator";
declare class Required implements InputValidator {
    errorName: string;
    validate(text: string): boolean;
}
declare class MinLength implements InputValidator {
    private minLength;
    errorName: string;
    constructor(minLength: number);
    validate(text: string): boolean;
}
declare class MaxLength implements InputValidator {
    private maxLenght;
    errorName: string;
    constructor(maxLenght: number);
    validate(text: string): boolean;
}
declare class Email implements InputValidator {
    errorName: string;
    emailRegexp: RegExp;
    validate(text: string): boolean;
}
declare const Validators: {
    Required: typeof Required;
    MinLength: typeof MinLength;
    MaxLength: typeof MaxLength;
    Email: typeof Email;
};
export default Validators;
