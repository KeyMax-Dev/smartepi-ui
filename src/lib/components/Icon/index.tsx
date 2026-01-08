import type { HTMLMotionProps } from 'framer-motion';
import Icons from './../../assets/svgs/icons';
import { IconElement } from './style';

export interface IconProps extends HTMLMotionProps<'div'> {
	name: string;
	color?: string;
	invert?: boolean;
	height?: string;
	width?: string;
}

export default function Icon(props: IconProps): React.ReactElement {
	return <IconElement {...props}>{Icons[props.name]}</IconElement>;
}
