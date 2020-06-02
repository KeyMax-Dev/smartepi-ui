/// <reference types="react" />
import { HTMLMotionProps } from 'framer-motion';
export interface BadgeBaseProps extends HTMLMotionProps<'div'> {
    icon?: string;
    text?: string | number;
    color?: string;
}
export default function Badge(props: BadgeBaseProps): JSX.Element;
