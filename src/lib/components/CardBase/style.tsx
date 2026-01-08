import { motion } from 'framer-motion';
import styled from 'styled-components';
import { getGlobalTheme } from '../../assets/themes';
import type { CardBaseProps } from '.';

export const CardBaseElement = styled(motion.div)<CardBaseProps>`
	min-width: ${({ width }) => width || ''};
	width: ${({ width }) => width || ''};
	max-width: calc(100% - 30px);
	min-height: ${({ height }) => height || ''};
	background-color: ${({ color, invert }) =>
		getGlobalTheme().colors[color || 'primary'][
			invert ? 'contrast' : 'principal'
		]};
	border-radius: calc(${() => getGlobalTheme().borderRadius} * 2);
	margin: 10px;
	padding: 15px;
	box-shadow: ${() => getGlobalTheme().boxShadow.normal};

	display: flex;
	flex-direction: column;
	align-items: center;
	position: relative;

	cursor: pointer;
	transition: all ${() => getGlobalTheme().transitions.fast};

	color: ${({ color, invert }) =>
		getGlobalTheme().colors[color || 'primary'][
			invert ? 'principal' : 'contrast'
		]};

	h2 {
		margin: 5px 0;
		text-align: ${() => getGlobalTheme().font.h2.textAlign};
		font-weight: ${() => getGlobalTheme().font.h2.fontWeight};
		font-size: ${() => getGlobalTheme().font.h2.fontSize};
		line-height: ${() => getGlobalTheme().font.h2.lineHeight};
		color: ${({ color, invert }) =>
			getGlobalTheme().colors[color || 'primary'][
				invert ? 'principal' : 'contrast'
			]};

		max-width: calc(100% - 30px);
		overflow: hidden;
		display: -webkit-box;
		-webkit-line-clamp: 1;
		-webkit-box-orient: vertical;
	}

	.ui-card-description {
		text-align: ${() => getGlobalTheme().font.p1.textAlign};
		font-weight: ${() => getGlobalTheme().font.p1.fontWeight};
		font-size: ${() => getGlobalTheme().font.p1.fontSize};
		line-height: ${() => getGlobalTheme().font.p1.lineHeight};

		max-width: calc(100% - 30px);
		overflow: hidden;
		display: -webkit-box;
		-webkit-line-clamp: 1;
		-webkit-box-orient: vertical;
	}

	footer {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100%;
		position: absolute;
		bottom: -10px;
	}
`;
