import styled from 'styled-components';
import { getGlobalTheme } from '../../assets/themes';
import { motion } from 'framer-motion';

interface TextAreaContainerProps {
	invert?: boolean;
}

export const TextAreaContainerElement = styled(
	motion.div
)<TextAreaContainerProps>`
	padding: 5px;
	margin: 3px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	transition: all ${() => getGlobalTheme().transitions.fast};
	position: relative;
	width: fit-content;
	max-width: 100%;

	&&.ui-textarea-container-outline {
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

	&&.ui-textarea-container-downline {
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

	textarea {
		min-width: 286px;
		width: 100%;
		max-width: 100%;
		min-height: 82px;
		height: 100%;
		max-height: 100%;
		color: ${() => getGlobalTheme().colors.primary.principal};
		border: none;
		outline: none;
		font-size: ${() => getGlobalTheme().font.input.fontSize};
		font-weight: ${() => getGlobalTheme().font.input.fontWeight};
		text-align: ${() => getGlobalTheme().font.input.textAlign};
		font-family: ${() => getGlobalTheme().font.input.fontFamily};

		&::placeholder {
			transition: all ${() => getGlobalTheme().transitions.avarage};
		}
		&:focus {
			&::placeholder {
				color: transparent;
			}
		}
	}
	.__icon {
		position: absolute;
		bottom: 10px;
		right: 10px;
		opacity: 0.3;
	}
`;
