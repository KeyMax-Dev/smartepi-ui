import { HTMLMotionProps } from 'framer-motion';
import Icon from '../Icon';
import IconButton from './IconButton';
import React from 'react';
import BaseButton from './BaseButton';

type ButtonTypes = 'solid' | 'outline' | 'icon' | 'square';

export interface ButtonProps extends HTMLMotionProps<'button'> {
    buttonType?: ButtonTypes;
    color?: string;
    icon?: string;
    iconSize?: string;
    invert?: boolean;
    text?: string;
}

export default function Button(props: ButtonProps): JSX.Element {

    const buttonType: ButtonTypes = props.buttonType ? props.buttonType : 'solid';

    switch (buttonType) {
        case 'icon':
            if (!!!props.icon) throw new Error('Square button icon not provided');
            return (
                <IconButton {...props}>
                    <Icon name={props.icon} color={props.color} invert={props.invert} height={props.iconSize} width={props.iconSize} className="__icon" />
                    {props.text && <span>{props.text}</span>}
                </IconButton>
            );
        case 'outline':
        case 'solid':
        default:
            return (
                <BaseButton {...props} className={`__button-${buttonType} ${props.className}`}>
                    {props.icon && <Icon name={props.icon} color={props.color} invert={(buttonType === 'solid' || props.invert)} height={props.iconSize} width={props.iconSize} style={{ marginRight: '15px' }} />}
                    {props.text && <span>{props.text}</span>}
                </BaseButton>
            );
    }
}