import { HTMLMotionProps } from 'framer-motion';
import Icon from '../Icon';
import IconButton from './IconButton';
import OutlineButton from './OutlineButton';
import React from 'react';
import SolidButton from './SolidButton';

type ButtonTypes = 'solid' | 'outline' | 'icon';

export interface ButtonProps extends HTMLMotionProps<'button'> {
    text?: string;
    icon?: string;
    color?: string;
    styleType?: ButtonTypes;
}

export default function Button(props: ButtonProps): JSX.Element {

    switch (props.styleType) {
        case 'icon':
            return (
                <IconButton {...props}>
                    {props.icon && <Icon name={props.icon} color={props.color} invert={false} height="100%" width="100%" />}
                </IconButton>
            );
        case 'outline':
            return (
                <OutlineButton {...props}>
                    {props.icon && <Icon name={props.icon} color={props.color} invert={true} height="100%" width="unset" />}
                    {props.text && <span>{props.text}</span>}
                </OutlineButton>
            );
        case 'solid':
        default:
            return (
                <SolidButton {...props}>
                    {props.icon && <Icon name={props.icon} color={props.color} invert={true} height="100%" width="unset" />}
                    {props.text && <span>{props.text}</span>}
                </SolidButton>
            );
    }
}