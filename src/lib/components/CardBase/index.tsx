import React from 'react';
import { CardBaseElement } from './style';
import { HTMLMotionProps } from 'framer-motion';

export interface CardBaseProps extends HTMLMotionProps<'div'> {
    width?: string;
    height?: string;
    color?: string;
}

export default function CardBase(props: CardBaseProps): JSX.Element {

    const width = props.width ? props.width : 'unset';
    const height = props.height ? props.height : 'unset';
    const color = props.color ? props.color : 'primary';

    return (
        <CardBaseElement {...props} {...{width, height, color}}/>
    );
}
