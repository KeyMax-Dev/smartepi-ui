/// <reference types="react" />
import { HTMLMotionProps } from 'framer-motion';
export interface CardBaseProps extends HTMLMotionProps<'div'> {
    width?: string;
    height?: string;
    color?: string;
}
export default function CardBase(props: CardBaseProps): JSX.Element;
