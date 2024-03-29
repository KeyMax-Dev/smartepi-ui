import React from 'react';
import { CardBaseElement } from './style';
import { HTMLMotionProps } from 'framer-motion';

export interface CardBaseProps extends HTMLMotionProps<'div'> {
	width?: string;
	height?: string;
	color?: string;
	invert?: boolean;
}

export default function CardBase(props: CardBaseProps): JSX.Element {
	return <CardBaseElement {...props} />;
}
