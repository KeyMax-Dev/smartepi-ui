import { motion } from 'framer-motion';
import styled from 'styled-components';
import { getGlobalTheme } from '../../assets/themes';
import { InputProps } from './index';

export const InputContainerElement = styled(motion.div)<InputProps>`
	min-width: 300px;
	height: 50px;
	margin: 5px;
	display: flex;
	justify-content: flex-start;
	align-items: center;
	transition: all ${() => getGlobalTheme().transitions.fast};
	position: relative;

	&&.ui-input-container-outline {
		background-color: ${({ color, invert }): string =>
			getGlobalTheme().colors[color || 'primary'][
				invert ? 'principal' : 'contrast'
			]};
		border: 1px solid
			${({ color, invert }): string =>
				getGlobalTheme().colors[color || 'primary'][
					invert ? 'contrast' : 'principal'
				]}32;
		border-radius: ${() => getGlobalTheme().borderRadius};

		&:focus-within {
			box-shadow: ${() => getGlobalTheme().boxShadow.active};
			border: 2px solid
				${({ color, invert }): string =>
					getGlobalTheme().colors[color || 'primary'][
						invert ? 'contrast' : 'principal'
					]};
		}
	}

	&&.ui-input-container-downline {
		background-color: transparent;
		border-bottom: 1px solid
			${({ color, invert }): string =>
				getGlobalTheme().colors[color || 'primary'][
					invert ? 'contrast' : 'principal'
				]}32;

		&:focus-within {
			border-bottom: 2px solid
				${({ color, invert }): string =>
					getGlobalTheme().colors[color || 'primary'][
						invert ? 'contrast' : 'principal'
					]};
		}
	}

	.__icon-right {
		margin: 10px 5px 0 0;
		padding: 0;

		.ui-btn-icon {
			margin: 0 !important;
		}
	}

	.__icon-left {
		margin: 10px 0 0 5px;
		padding: 0;

		.ui-btn-icon {
			margin: 0 !important;
		}
	}

	@media screen and (max-width: 600px) {
		width: calc(100% - 30px);
		min-width: 250px;

		.__icon-right {
			margin: 0 3px 0 0;
		}

		.__icon-left {
			margin: 0 0 0 3px;
		}
	}
`;

export const InputElement = styled(motion.input)<InputProps>`
	color: ${({ color, invert }): string =>
		getGlobalTheme().colors[color || 'primary'][
			invert ? 'contrast' : 'principal'
		]};
	background-color: transparent;
	flex: 1;
	border: none;
	outline: none;
	font-size: ${() => getGlobalTheme().font.input.fontSize};
	font-weight: ${() => getGlobalTheme().font.input.fontWeight};
	text-align: ${() => getGlobalTheme().font.input.textAlign};
	font-family: ${() => getGlobalTheme().font.input.fontFamily};
	margin: 10px 10px 0px 10px;

	&::placeholder {
		visibility: hidden;
	}

	@media screen and (max-width: 600px) {
		margin: 0 3px;
		min-width: 150px;
	}
`;

export interface InputLabelProps extends InputProps {
	active?: boolean;
}

export const InputLabelElement = styled.label<InputLabelProps>`
	position: absolute;
	left: 0;
	right: 0;
	display: flex;
	justify-content: flex-start;
	align-items: center;
	padding: 0 12px;
	pointer-events: none;

	height: 100%;

	top: ${({ active }) => (active ? '-15px' : '0px')};
	font-size: ${({ active }) => (active ? '10px' : '16px')};

	transition: all ${() => getGlobalTheme().transitions.avarage};

	color: ${({ color, invert }): string =>
		getGlobalTheme().colors[color || 'primary'][
			invert ? 'contrast' : 'principal'
		]}7A;

	div {
		display: -webkit-box;
		-webkit-line-clamp: 1;
		-webkit-box-orient: vertical;
		overflow: hidden;
		max-width: 100%;
	}
`;
