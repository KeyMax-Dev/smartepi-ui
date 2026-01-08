import { motion } from 'framer-motion';
import styled from 'styled-components';
import { getGlobalTheme } from '../../assets/themes';
import type { IconProps } from './index';

export const IconElement = styled(motion.div)<IconProps>`
	width: ${(props): string =>
		props.width ? props.width : getGlobalTheme().defaultIconSize};
	height: ${(props): string =>
		props.height ? props.height : getGlobalTheme().defaultIconSize};
	flex-shrink: 0;

	display: flex;
	justify-content: center;
	align-items: center;

	svg {
		width: 100%;
		height: 100%;
	}

	path {
		fill: ${(props): string =>
			props.color
				? getGlobalTheme().colors[props.color][
						props.invert ? 'contrast' : 'principal'
					]
				: getGlobalTheme().colors.primary[
						props.invert ? 'contrast' : 'principal'
					]};
	}
`;
