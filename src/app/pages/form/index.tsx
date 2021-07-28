import React from 'react';
import styled from 'styled-components';
import { useForm, Validators, Button } from '../../../lib';

const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

export const FormPage = (): JSX.Element => {
	const [form, getErrors, getValues] = useForm([
		{
			key: 'name',
			validators: [
				new Validators.Required(),
				new Validators.MinLength(4),
			],
			initial: 'valor inicial',
			inputProps: {
				placeholder: 'name',
				enableClear: true,
			},
		},
		{
			key: 'password',
			validators: [
				new Validators.Required(),
				new Validators.MinLength(3),
				new Validators.MaxLength(6),
			],
			inputProps: {
				type: 'password',
				placeholder:
					'Password Password Password Password Password Password',
				containerType: 'outline',
				enableClear: true,
			},
		},
	]);

	const clickHandler = (): void => {
		console.log('errors', getErrors());
		console.log('values', getValues());
	};

	return (
		<Container>
			<h1>Form Page</h1>
			{form}
			<Button onClick={clickHandler} text="Validate" />
		</Container>
	);
};
