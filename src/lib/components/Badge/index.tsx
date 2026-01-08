import type { HTMLMotionProps } from 'framer-motion';
import Icon from '../Icon';
import { BadgeElement } from './style';

export interface BadgeBaseProps extends HTMLMotionProps<'div'> {
	icon?: string;
	text?: string | number;
	color?: string;
}

export default function Badge(props: BadgeBaseProps): React.ReactElement {
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
