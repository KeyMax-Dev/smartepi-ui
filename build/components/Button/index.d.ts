/// <reference types="react" />
import { HTMLMotionProps } from 'framer-motion';
declare type ButtonTypes = 'solid' | 'outline' | 'icon';
export interface ButtonProps extends HTMLMotionProps<'button'> {
    text?: string;
    icon?: string;
    color?: string;
    styleType?: ButtonTypes;
}
export default function Button(props: ButtonProps): JSX.Element;
export {};
