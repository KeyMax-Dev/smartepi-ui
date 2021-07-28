import React from 'react';
import { BadgeElement } from './style';
import Icon from '../Icon';
import { HTMLMotionProps } from 'framer-motion';

export interface BadgeBaseProps extends HTMLMotionProps<'div'> {
	icon?: string;
	text?: string | number;
	color?: string;
}

export default function Badge(props: BadgeBaseProps): JSX.Element {
	const color = props.color ? props.color : 'primary';

	return (
		<BadgeElement {...props} color={color}>
			{props.icon && (
				<Icon
					className="ui-badge-icon"
					name={props.icon}
					invert={true}
					width="15pt"
					height="unset"
					color={color}
				/>
			)}
			{props.text && <span className="ui-badge-text">{props.text}</span>}
		</BadgeElement>
	);
}
