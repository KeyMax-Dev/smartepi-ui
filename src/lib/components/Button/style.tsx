import { motion } from 'framer-motion';
import styled from 'styled-components';
import { getGlobalTheme } from '../..';
import type { ButtonProps } from '.';

export const IconButton = styled(motion.button)<ButtonProps>`
	all: unset;
	background: transparent;
	color: ${(props): string =>
		props.color
			? getGlobalTheme().colors[props.color][
					props.invert ? 'contrast' : 'principal'
				]
			: getGlobalTheme().colors.primary[
					props.invert ? 'contrast' : 'principal'
				]};
	-webkit-text-fill-color: ${(props): string =>
		props.color
			? getGlobalTheme().colors[props.color][
					props.invert ? 'contrast' : 'principal'
				]
			: getGlobalTheme().colors.primary[
					props.invert ? 'contrast' : 'principal'
				]};
	padding: 5px;
	border-radius: ${() => getGlobalTheme().borderRadius};
	margin: 3px;
	transition: all ${() => getGlobalTheme().transitions.fast};
	cursor: pointer;

	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	position: relative;

	&:active {
		transform: scale(0.96);
	}

	span {
		max-width: 80px;
		text-align: center;
		font-size: calc(${() => getGlobalTheme().font.h2.fontSize} * 0.45);
		font-weight: ${() => getGlobalTheme().font.h2.fontWeight};
		text-overflow: ellipsis;
		overflow: hidden;
		text-transform: uppercase;
	}

	.ui-btn-icon {
		flex: 1;
		margin: 5px;
	}
`;

export const BaseButton = styled(motion.button)<ButtonProps>`
	all: unset;
	padding: 10px 25px;
	min-height: 38px;
	border-radius: ${() => getGlobalTheme().borderRadius};
	margin: 3px;
	transition: all ${() => getGlobalTheme().transitions.fast};
	cursor: pointer;

	display: flex;
	align-items: center;
	justify-content: center;
	position: relative;

	&&.ui-btn-outline {
		background: transparent;
		color: ${(props): string =>
			props.color
				? getGlobalTheme().colors[props.color][
						props.invert ? 'contrast' : 'principal'
					]
				: getGlobalTheme().colors.primary[
						props.invert ? 'contrast' : 'principal'
					]};
		-webkit-text-fill-color: ${(props): string =>
			props.color
				? getGlobalTheme().colors[props.color][
						props.invert ? 'contrast' : 'principal'
					]
				: getGlobalTheme().colors.primary[
						props.invert ? 'contrast' : 'principal'
					]};
		border: 1px solid
			${(props): string =>
				props.color
					? getGlobalTheme().colors[props.color][
							props.invert ? 'contrast' : 'principal'
						]
					: getGlobalTheme().colors.primary[
							props.invert ? 'contrast' : 'principal'
						]};

		&:active {
			background: ${(props): string =>
				props.color
					? getGlobalTheme().colors[props.color][
							props.invert ? 'contrast' : 'principal'
						]
					: getGlobalTheme().colors.primary[
							props.invert ? 'contrast' : 'principal'
						]}20;
		}

		&:disabled {
			opacity: 0.15;
			cursor: default;

			&:active {
				transform: none;
				background: transparent;
			}
		}

		span {
			max-width: 300px;
			flex: 1;
			text-align: center;
			font-weight: ${() => getGlobalTheme().font.h2.fontWeight};
		}
	}

	&&.ui-btn-solid {
		background: ${(props): string =>
			props.color
				? getGlobalTheme().colors[props.color][
						props.invert ? 'contrast' : 'principal'
					]
				: getGlobalTheme().colors.primary[
						props.invert ? 'contrast' : 'principal'
					]};
		-webkit-text-fill-color: ${(props): string =>
			props.color
				? getGlobalTheme().colors[props.color][
						props.invert ? 'principal' : 'contrast'
					]
				: getGlobalTheme().colors.primary[
						props.invert ? 'principal' : 'contrast'
					]};
		border: 1px solid transparent;
		box-shadow: ${() => getGlobalTheme().boxShadow.normal};

		&:active {
			box-shadow: ${() => getGlobalTheme().boxShadow.active};
			transform: scale(0.96);
		}

		&:disabled {
			opacity: 0.3;
			cursor: default;
			box-shadow: none;
			&:active {
				transform: none;
				box-shadow: none;
			}
		}

		span {
			max-width: 300px;
			flex: 1;
			text-align: center;
			color: ${(props): string =>
				props.color
					? getGlobalTheme().colors[props.color].contrast
					: getGlobalTheme().colors.primary.contrast};
			font-weight: ${() => getGlobalTheme().font.h2.fontWeight};
		}
	}

	.ui-btn-solid-icon,
	.ui-btn-outline-icon {
		margin-right: 15px;
	}
`;
