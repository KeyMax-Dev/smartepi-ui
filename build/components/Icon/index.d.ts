import React from 'react';
export interface IconProps extends React.HTMLAttributes<HTMLDivElement> {
    name: string;
    color?: string;
    invert?: boolean;
    height?: string;
    width?: string;
}
export default function Icon(props: IconProps): JSX.Element;
