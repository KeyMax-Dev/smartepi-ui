import type React from 'react';
import { useEffect, useState } from 'react';
// @ts-expect-error
import DefaultImage from '../../assets/images/default-image.jpg';
import { ImageAvatarElement } from './style';
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
