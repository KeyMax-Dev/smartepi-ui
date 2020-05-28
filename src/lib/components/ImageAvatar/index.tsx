import React from 'react';
import { ImageAvatarElement } from './style';

export interface ImageAvatarProps extends React.HTMLAttributes<HTMLDivElement> {
    size?: string;
    src?: string;
}

export default function ImageAvatar(props: ImageAvatarProps): JSX.Element {
    return (
        <ImageAvatarElement {...props} />
    );
}
