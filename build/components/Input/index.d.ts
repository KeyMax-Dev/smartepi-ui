import React from 'react';
import { HTMLMotionProps } from 'framer-motion';
declare type ContainerType = 'outline' | 'downline';
export interface InputProps extends HTMLMotionProps<'input'> {
    color?: string;
    containerProps?: HTMLMotionProps<'div'>;
    containerType?: ContainerType;
    enableClear?: boolean;
    enableDatepicker?: boolean;
    getRef?: (input: React.MutableRefObject<HTMLInputElement> | undefined) => void;
    iconLeft?: string;
    iconRight?: string;
    invert?: boolean;
}
export default function Input(props: InputProps): JSX.Element;
export {};
