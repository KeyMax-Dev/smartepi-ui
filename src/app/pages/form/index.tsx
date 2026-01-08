import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { Button, useForm, Validators } from '../../../lib';

const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

export const FormPage = (): JSX.Element => {
	const navigate = useNavigate();
	const [form1, getErrors1, getValues1] = useForm(
		[
			{
				key: 'name',
				validators: [new Validators.Required(), new Validators.MinLength(4)],
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
		],
		'form1',
	);

	const [form2, getErrors2, getValues2] = useForm(
		[
			{
				key: 'name',
				validators: [new Validators.Required(), new Validators.MinLength(4)],
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
		],
		'form2',
	);

	const [counter, setCounter] = useState(0);

	return (
		<Container>
			<h1>Form Page</h1>

			<h2>Form 1</h2>
			<form1.name placeholder="Name" enableClear />
			<form1.password
				placeholder="Password Password Password Password Password Password"
				containerType="outline"
				type="password"
			/>
			<form1.datepicker placeholder="Date" enableDatepicker />

			<Button
				onClick={(): void => {
					console.log('errors', getErrors1());
					console.log('values', getValues1());
				}}
				text="Validate"
			/>

			<h2>Form 2</h2>
			<form2.name placeholder="Name" enableClear />
			<form2.password
				placeholder="Password Password Password Password Password Password"
				containerType="outline"
				type="password"
			/>
			<form2.datepicker placeholder="Date" enableDatepicker />

			<Button
				onClick={(): void => {
					console.log('errors', getErrors2());
					console.log('values', getValues2());
				}}
				text="Validate"
			/>

			{counter}
			<Button onClick={() => setCounter(counter + 1)} text="Next" />
			<Button onClick={() => navigate('/select')} text="Other Page" />
		</Container>
	);
};
