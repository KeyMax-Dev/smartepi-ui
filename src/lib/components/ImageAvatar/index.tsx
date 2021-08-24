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
		if (props.src) {
			const loadingImage = new Image();
			const successCallback = (): void => {
				setImage(props.src);
			};
			loadingImage.addEventListener('load', successCallback);
			loadingImage.src = props.src;
			return () => {
				loadingImage.removeEventListener('load', successCallback);
			};
		}
	}, []);

	return <ImageAvatarElement {...props} src={image} />;
}
