import React from 'react';
import { HTMLMotionProps } from 'framer-motion';
declare type ContainerType = 'outline' | 'downline';
export interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
    color?: string;
    containerProps?: HTMLMotionProps<'div'>;
    containerType?: ContainerType;
    icon?: string;
    invert?: boolean;
}
export default function TextArea({ icon, containerProps, containerType, invert, color, ...props }: TextAreaProps): JSX.Element;
export {};
