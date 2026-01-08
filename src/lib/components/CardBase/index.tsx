import type { HTMLMotionProps } from 'framer-motion';
import { CardBaseElement } from './style';

export interface CardBaseProps extends HTMLMotionProps<'div'> {
	width?: string;
	height?: string;
	color?: string;
	invert?: boolean;
}

export default function CardBase(props: CardBaseProps): React.ReactElement {
	return <CardBaseElement {...props} />;
}
