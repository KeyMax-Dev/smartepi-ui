/// <reference types="react" />
import { HTMLMotionProps } from 'framer-motion';
export interface IconProps extends HTMLMotionProps<'div'> {
    name: string;
    color?: string;
    invert?: boolean;
    height?: string;
    width?: string;
}
export default function Icon(props: IconProps): JSX.Element;
