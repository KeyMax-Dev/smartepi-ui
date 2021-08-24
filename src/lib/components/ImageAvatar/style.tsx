import { ImageAvatarProps } from './index';
import styled from 'styled-components';
import { getGlobalTheme } from '../../assets/themes';

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
	background-image: url(${(props): string => props.src as string});
	background-size: contain;
	background-repeat: no-repeat;
	background-position: center;
	margin: 3px;
`;
