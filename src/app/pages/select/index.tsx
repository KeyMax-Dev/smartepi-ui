import React, { useState } from 'react';
import styled from 'styled-components';
import { Select } from '../../../lib';

const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

const dataMock = [
	{ value: '1', label: 'Option 1' },
	{ value: '2', label: 'Option 2' },
	{ value: '3', label: 'Option 3' },
	{ value: '4', label: 'Option 4' },
];

export const SelectPage = (): JSX.Element => {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const [selectedValue, setSelectedValue] = useState<any>();

	return (
		<Container>
			<h1>Select Page</h1>

			<Select<typeof dataMock[0]>
				data={dataMock}
				dataKey="label"
				value={selectedValue}
				onSelect={(event, selected) => setSelectedValue(selected)}
				placeholder="Selection"
			/>
			<Select<typeof dataMock[0]>
				data={dataMock}
				dataKey="label"
				value={selectedValue}
				onSelect={(event, selected) => setSelectedValue(selected)}
				placeholder="Selection"
				enableClear
			/>
		</Container>
	);
};
