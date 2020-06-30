import React from 'react';
import { HTMLMotionProps } from 'framer-motion';
export interface TabProps extends HTMLMotionProps<'div'> {
    title: string;
    children: React.ReactNode;
}
export default function Tab(props: TabProps): JSX.Element;
