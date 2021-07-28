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
			initialValue: 'initial value',
		},
		{
			key: 'password',
			validators: [
				new Validators.Required(),
				new Validators.MinLength(3),
				new Validators.MaxLength(6),
			],
		},
		{
			key: 'datepicker',
			validators: [],
		},
	]);

	const clickHandler = (): void => {
		console.log('errors', getErrors());
		console.log('values', getValues());
	};

	return (
		<Container>
			<h1>Form Page</h1>

			<form.name placeholder="Name" enableClear />
			<form.password
				placeholder="Password Password Password Password Password Password"
				containerType="outline"
				type="password"
			/>
			<form.datepicker placeholder="Date" enableDatepicker />

			<Button onClick={clickHandler} text="Validate" />
		</Container>
	);
};
