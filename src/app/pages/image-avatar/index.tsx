import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { ImageAvatar } from '../../../lib';

const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

const IMAGE_URLS = [
	'https://api.qa.smartepi.keymax.com.br/assets/product/aeris-77qvj-product:e9e7609d6c1c5fb52a35a48c9511b395.jpeg',
	'https://filedn.com/ltOdFv1aqz1YIFhf4gTY8D7/ingus-info/BLOGS/Photography-stocks3/stock-photography-slider.jpg',
];

export const ImageAvatarPage = (): JSX.Element => {
	const [avatar, setAvatar] = useState(0);

	useEffect(() => {
		setTimeout(() => {
			if (avatar === 0) {
				setAvatar(1);
			} else {
				setAvatar(0);
			}
		}, 5000);
	}, [avatar]);

	return (
		<Container>
			<h1>Image Avatar</h1>
			<ImageAvatar src={IMAGE_URLS[avatar]} size="300px" />
		</Container>
	);
};
