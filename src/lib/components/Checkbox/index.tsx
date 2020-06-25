import React, { useState, useEffect, useRef } from 'react';
import { HTMLMotionProps, useAnimation } from "framer-motion";
import CheckboxElement from "./style";
import { Icon } from '../..';
import { getGlobalTheme } from '../../assets/themes';
import Animations from '../../assets/animations';

export interface CheckboxProps extends HTMLMotionProps<'div'> {
    icon?: string;
    color?: string;
    size?: string;
    onToggle?: (value: boolean) => void;
    value?: boolean;
}

export default function Checkbox(props: CheckboxProps) {

    const size = props.size ? props.size : getGlobalTheme().defaultIconSize;
    const [value, setValue] = useState<boolean>(!!props.value);
    const animationController = useAnimation();
    const iconName = props.icon ? props.icon : 'check';

    const toggle = () => {
        setValue(!value);
    };

    useEffect(() => {
        setValue(!!props.value);
    }, [props.value]);

    useEffect(() => {
        animationController.start(value ? Animations.FadeIn : Animations.FadeOut);
        if (props.onToggle) {
            props.onToggle(value);
        }
        return () => animationController.stop();
    }, [value]);

    return (
        <CheckboxElement className={`__checkbox-${value}`} style={{ width: size, height: size }} onClick={toggle} color={props.color}>
            <Icon initial={{ opacity: value ? 0 : 1 }} name={iconName} invert={value} width={`calc(${size} - 30%)`} height={`calc(${size} - 30%)`} color={props.color} animate={animationController} />
        </CheckboxElement>
    );
}