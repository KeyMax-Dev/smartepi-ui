import React, { useState } from 'react';
import { HTMLMotionProps, useAnimation } from "framer-motion";
import CheckboxElement from "./style";
import { Icon } from '../..';
import { getGlobalTheme } from '../../assets/themes';
import { FadeOut, FadeIn } from '../../assets/animations';

export interface CheckboxProps extends HTMLMotionProps<'div'> {
    iconName?: string;
    color?: string;
    size?: string;
    onToggle?: (value: boolean) => void;
    value?: boolean;
}

export default function Checkbox(props: CheckboxProps) {

    const size = props.size ? props.size : getGlobalTheme().defaultIconSize;
    const [value, setValue] = useState<boolean>(!!props.value);
    const animationController = useAnimation();
    const iconName = props.iconName ? props.iconName : 'check';

    const toggle = () => {
        animationController.stop();
        setValue(!value); 
        if (props.onToggle) {
            props.onToggle(!value);
        }
        animationController.start(value ? FadeOut : FadeIn);
    };

    return (
        <CheckboxElement className={`__checkbox-${value}`} style={{ width: size, height: size }} onClick={toggle} color={props.color}>
            <Icon initial={{opacity: value ? 1 : 0}} name={iconName} invert={value} width={`calc(${size} - 30%)`} height={`calc(${size} - 30%)`} color={props.color} animate={animationController}/>
        </CheckboxElement>
    );
}