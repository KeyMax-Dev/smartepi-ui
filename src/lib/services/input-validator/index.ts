import InputValidator, { InputValueType } from './input-validator';
import Validators from './default-validators';

const validate = (
	value: InputValueType,
	...validators: InputValidator[]
): string[] | false => {
	const errors: string[] = [];

	validators.forEach((validator: InputValidator) => {
		if (!validator.validate(value)) {
			errors.push(validator.errorName);
		}
	});

	return errors.length > 0 ? errors : false;
};

export { validate, Validators };

export type { InputValidator };
