/// <reference types="react" />
import { HTMLMotionProps } from 'framer-motion';
declare type ButtonTypes = 'solid' | 'outline' | 'icon' | 'square';
export interface ButtonProps extends HTMLMotionProps<'button'> {
    buttonType?: ButtonTypes;
    color?: string;
    icon?: string;
    iconSize?: string;
    invert?: boolean;
    text?: string;
}
export default function Button(props: ButtonProps): JSX.Element;
export {};
