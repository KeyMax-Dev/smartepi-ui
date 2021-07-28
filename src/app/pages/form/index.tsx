import React from 'react';
import styled from 'styled-components';
import { useForm, Validators } from '../../../lib';

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
				placeholder: 'Password',
				containerType: 'outline',
			},
		},
	]);

	return (
		<Container>
			<h1>Form Page</h1>
			{form}
		</Container>
	);
};
