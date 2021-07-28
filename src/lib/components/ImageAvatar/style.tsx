import { ImageAvatarProps } from './index';
import styled from 'styled-components';
import { getGlobalTheme } from '../../assets/themes';

// eslint-disable-next-line
// @ts-ignore
import DefaultImage from '../../assets/images/default-image.jpg';

export const ImageAvatarElement = styled.div<ImageAvatarProps>`
	width: ${(props): string =>
		props.size ? props.size : getGlobalTheme().defaultIconSize};
	height: ${(props): string =>
		props.size ? props.size : getGlobalTheme().defaultIconSize};
	min-width: ${(props): string =>
		props.size ? props.size : getGlobalTheme().defaultIconSize};
	min-height: ${(props): string =>
		props.size ? props.size : getGlobalTheme().defaultIconSize};
	border-radius: 50%;
	background-image: url(${(props): string =>
		props.src ? props.src : DefaultImage});
	background-size: cover;
	background-repeat: no-repeat;
	background-position: center;
	margin: 3px;
`;
