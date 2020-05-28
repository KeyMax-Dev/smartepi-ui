import React from 'react';
export interface ImageAvatarProps extends React.HTMLAttributes<HTMLDivElement> {
    size?: string;
    src?: string;
}
export default function ImageAvatar(props: ImageAvatarProps): JSX.Element;
