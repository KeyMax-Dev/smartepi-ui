import React from 'react';
import { TabElement } from './style';
import { HTMLMotionProps } from 'framer-motion';

export interface TabProps extends HTMLMotionProps<'div'> {
    title: string;
    children: React.ReactNode;
}

export default function Tab(props: TabProps): JSX.Element {
    return (
        <TabElement {...props} className={`tab-body ${props.className}`}>
            {props.children}
        </TabElement>
    );
}