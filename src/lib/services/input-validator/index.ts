import Validators from './default-validators';
import type InputValidator from './input-validator';
import type { InputValueType } from './input-validator';

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
