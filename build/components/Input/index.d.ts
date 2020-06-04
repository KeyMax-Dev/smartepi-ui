/// <reference types="react" />
import { HTMLMotionProps } from 'framer-motion';
declare type ContainerType = 'outline' | 'downline';
export interface InputProps extends HTMLMotionProps<'input'> {
    color?: string;
    containerProps?: HTMLMotionProps<'div'>;
    enableClear?: boolean;
    enableDatepicker?: boolean;
    iconLeft?: string;
    iconRight?: string;
    containerType?: ContainerType;
}
export default function Input(props: InputProps): JSX.Element;
export {};
