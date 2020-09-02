import InputValidator from "./input-validator";

class Required implements InputValidator {
    errorName = 'Required';
    validate(text: string): boolean {
        return text.length > 0;
    }
}

class MinLength implements InputValidator {
    errorName = 'MinLength';
    constructor(private minLength: number) { }

    validate(text: string): boolean {
        return text.length >= this.minLength;
    }
}

class MaxLength implements InputValidator {
    errorName = 'MaxLength';
    constructor(private maxLenght: number) { }

    validate(text: string): boolean {
        return text.length <= this.maxLenght;
    }
}

class Email implements InputValidator {
    errorName = 'Email';
    emailRegexp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    
    validate(text: string): boolean {
        return this.emailRegexp.test(text);
    }
}

const Validators = {
    Required,
    MinLength,
    MaxLength,
    Email
};

export default Validators;
