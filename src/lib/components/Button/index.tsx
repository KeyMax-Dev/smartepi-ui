import { HTMLMotionProps } from 'framer-motion';
import Icon from '../Icon';
import IconButton from './IconButton';
import OutlineButton from './OutlineButton';
import React from 'react';
import SolidButton from './SolidButton';

type ButtonTypes = 'solid' | 'outline' | 'icon' | 'square';

export interface ButtonProps extends HTMLMotionProps<'button'> {
    color?: string;
    icon?: string;
    iconSize?: string;
    styleType?: ButtonTypes;
    text?: string;
}

export default function Button(props: ButtonProps): JSX.Element {
    switch (props.styleType) {
        case 'icon':
            if (!!!props.icon) throw new Error('Square button icon not provided');
            return (
                <IconButton {...props}>
                    <Icon name={props.icon} color={props.color} invert={false} height={props.iconSize} width={props.iconSize} className="__icon" />
                    {props.text && <span>{props.text}</span>}
                </IconButton>
            );
        case 'outline':
            return (
                <OutlineButton {...props}>
                    {props.icon && <Icon name={props.icon} color={props.color} invert={false} height={props.iconSize} width={props.iconSize} style={{ marginRight: '15px' }} />}
                    {props.text && <span>{props.text}</span>}
                </OutlineButton>
            );
        case 'solid':
        default:
            return (
                <SolidButton {...props}>
                    {props.icon && <Icon name={props.icon} color={props.color} invert={true} height={props.iconSize} width={props.iconSize} style={{ marginRight: '15px' }} />}
                    {props.text && <span>{props.text}</span>}
                </SolidButton>
            );
    }
}