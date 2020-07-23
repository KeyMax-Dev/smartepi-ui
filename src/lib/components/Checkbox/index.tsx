import React, { useState, useEffect } from 'react';
import { HTMLMotionProps, useAnimation } from "framer-motion";
import CheckboxElement from "./style";
import { Icon } from '../..';
import { getGlobalTheme } from '../../assets/themes';
import Animations from '../../assets/animations';

export type CheckboxToggleEvent = Partial<React.MouseEvent<HTMLDivElement>> & {
    value: boolean;
};

export interface CheckboxProps extends HTMLMotionProps<'div'> {
    icon?: string;
    color?: string;
    size?: string;
    onToggle?: (event: CheckboxToggleEvent) => void;
    value?: boolean;
}

export default function Checkbox(props: CheckboxProps) {

    const size = props.size ? props.size : getGlobalTheme().defaultIconSize;
    const [value, setValue] = useState<boolean>(!!props.value);
    const [event, setEvent] = useState<CheckboxToggleEvent>({ value });
    const animationController = useAnimation();
    const iconName = props.icon ? props.icon : 'check';

    const toggle = (currentEvent: React.MouseEvent<HTMLDivElement>) => {
        setValue(!value);
        setEvent({ ...currentEvent, value });
    };

    useEffect(() => {
        setValue(!!props.value);
    }, [props.value]);

    useEffect(() => {
        animationController.start(value ? Animations.FadeIn : Animations.FadeOut);
        if (props.onToggle) {
            props.onToggle(event);
            setEvent({ value });
        }
        return () => animationController.stop();
    }, [value]);

    return (
        <CheckboxElement className={`__checkbox-${value}`} style={{ width: size, height: size }} onClick={toggle} color={props.color}>
            <Icon initial={{ opacity: 0 }} name={iconName} invert={value} width={`calc(${size} - 30%)`} height={`calc(${size} - 30%)`} color={props.color} animate={animationController} />
        </CheckboxElement>
    );
}