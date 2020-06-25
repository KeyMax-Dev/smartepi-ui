/// <reference types="react" />
import { HTMLMotionProps } from "framer-motion";
export interface CheckboxProps extends HTMLMotionProps<'div'> {
    icon?: string;
    color?: string;
    size?: string;
    onToggle?: (value: boolean) => void;
    value?: boolean;
}
export default function Checkbox(props: CheckboxProps): JSX.Element;
