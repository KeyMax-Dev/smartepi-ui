import React, { useEffect, useState } from 'react';
import { ImageAvatarElement } from './style';

// eslint-disable-next-line
// @ts-ignore
import DefaultImage from '../../assets/images/default-image.jpg';
export interface ImageAvatarProps extends React.HTMLAttributes<HTMLDivElement> {
	size?: string;
	src?: string;
}

export default function ImageAvatar(props: ImageAvatarProps): JSX.Element {
	const [image, setImage] = useState(DefaultImage);

	useEffect(() => {
		setImage(DefaultImage);
		if (props.src) {
			const loadingImage = new Image();
			const successCallback = (): void => {
				setImage(props.src);
				loadingImage.removeEventListener('load', successCallback);
			};
			loadingImage.addEventListener('load', successCallback);
			loadingImage.src = props.src;
		}
	}, [props.src]);

	return <ImageAvatarElement {...props} src={image} />;
}
