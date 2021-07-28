import { HTMLMotionProps } from 'framer-motion';
import Icon from '../Icon';
import { IconButton, BaseButton } from './style';
import React from 'react';

type ButtonTypes = 'solid' | 'outline' | 'icon' | 'square';

export interface ButtonProps extends HTMLMotionProps<'button'> {
	buttonType?: ButtonTypes;
	color?: string;
	icon?: string;
	iconSize?: string;
	invert?: boolean;
	text?: string;
}

export default function Button(props: ButtonProps): JSX.Element {
	const buttonType: ButtonTypes = props.buttonType
		? props.buttonType
		: 'solid';

	switch (buttonType) {
		case 'icon':
			if (!!!props.icon)
				throw new Error('Square button icon not provided');
			return (
				<IconButton {...props}>
					<Icon
						name={props.icon}
						color={props.color}
						invert={props.invert}
						height={props.iconSize}
						width={props.iconSize}
						className="ui-btn-icon"
					/>
					{props.text && <span>{props.text}</span>}
				</IconButton>
			);
		case 'outline':
		case 'solid':
		default:
			return (
				<BaseButton
					{...props}
					className={`ui-btn-${buttonType} ${props.className}`}
				>
					{props.icon && (
						<Icon
							name={props.icon}
							color={props.color}
							invert={buttonType === 'solid' || props.invert}
							height={props.iconSize}
							width={props.iconSize}
							className={`ui-btn-${buttonType}-icon`}
						/>
					)}
					{props.text && (
						<span className={`ui-btn-${buttonType}-text`}>
							{props.text}
						</span>
					)}
				</BaseButton>
			);
	}
}
