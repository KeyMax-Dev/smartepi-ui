import type { HTMLMotionProps } from 'framer-motion';
import type React from 'react';
import { TabElement } from './style';

export interface TabProps extends HTMLMotionProps<'div'> {
	title: string;
	children: React.ReactNode;
}

export default function Tab(props: TabProps): JSX.Element {
	return (
		<TabElement {...props} className={`ui-tabs-tab-body ${props.className}`}>
			{props.children}
		</TabElement>
	);
}
