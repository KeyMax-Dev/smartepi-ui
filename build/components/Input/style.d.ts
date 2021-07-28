import { InputProps } from './index';
export declare const InputContainerElement: import("styled-components").StyledComponent<import("framer-motion").ForwardRefComponent<HTMLDivElement, import("framer-motion").HTMLMotionProps<"div">>, any, InputProps, never>;
export declare const InputElement: import("styled-components").StyledComponent<import("framer-motion").ForwardRefComponent<HTMLInputElement, import("framer-motion").HTMLMotionProps<"input">>, any, InputProps, never>;
export interface InputLabelProps extends InputProps {
    active?: boolean;
}
export declare const InputLabelElement: import("styled-components").StyledComponent<"label", any, InputLabelProps, never>;
