import React from 'react';
import { HTMLMotionProps } from 'framer-motion';
export declare type CheckboxToggleEvent = Partial<React.MouseEvent<HTMLDivElement>> & {
    value: boolean;
};
export interface CheckboxProps extends HTMLMotionProps<'div'> {
    icon?: string;
    color?: string;
    size?: string;
    onToggle?: (event: CheckboxToggleEvent) => void;
    value?: boolean;
}
export default function Checkbox(props: CheckboxProps): JSX.Element;
