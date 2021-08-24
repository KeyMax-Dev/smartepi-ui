import React from 'react';
import styled from 'styled-components';
import { ImageAvatar } from '../../../lib';

const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

export const ImageAvatarPage = (): JSX.Element => {
	return (
		<Container>
			<h1>Image Avatar</h1>
			<ImageAvatar src="/invalid" />
		</Container>
	);
};
