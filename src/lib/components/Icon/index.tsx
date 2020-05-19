import React from 'react';
import { IconElement } from './style';
import Icons from './../../assets/svgs/icons';

export interface IconProps extends React.HTMLAttributes<HTMLDivElement> {
    name: string;
    color?: string;
    invert?: boolean;
    height?: string;
    width?: string;
}

export default function Icon(props: IconProps): JSX.Element {
    return (
        <IconElement {...props}>
            {Icons[props.name]}
        </IconElement>
    );
}
