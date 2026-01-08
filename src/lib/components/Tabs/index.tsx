import { motion, useAnimation } from 'framer-motion';
import type React from 'react';
import { type ReactElement, useEffect, useState } from 'react';
import ScrollableContainer from '../ScrollableContainer';
import { TabsLayoutElement } from './style';
import type Tab from './tab';
import type { TabProps } from './tab';

interface TabsHeaderProps {
	index?: number;
	children:
		| React.ReactElement<TabProps, typeof Tab>
		| React.ReactElement<TabProps, typeof Tab>[];
	onTabChange?: (index: number) => void;
}

export default function Tabs({
	index,
	children,
	onTabChange,
}: TabsHeaderProps): JSX.Element {
	const [tabIndex, setTabIndex] = useState(index === undefined ? 0 : index);
	const selectorController = useAnimation();
	const bodyController = useAnimation();
	const childrenLenght = Array.isArray(children) ? children.length : 1;

	useEffect(() => {
		selectorController.start({
			left: `calc(${(100 * tabIndex) / childrenLenght}%)`,
			transition: { duration: 0.2, ease: 'easeIn' },
		});

		// TODO: Define tab body animation
		// bodyController.start({
		//     opacity: [0, 1],
		//     transition: { duration: 0.2, ease: 'easeIn' }
		// });

		if (onTabChange) onTabChange(tabIndex);
	}, [tabIndex, childrenLenght, onTabChange, selectorController.start]);

	useEffect(() => {
		if (index !== undefined) {
			setTabIndex(index);
		}
	}, [index]);

	const renderTab = (element: ReactElement, index: number): JSX.Element => {
		return (
			<div
				key={index}
				className={`ui-tabs-tab ${
					tabIndex === index ? 'ui-tabs-tab-selected' : ''
				}`}
				onClick={(): void => setTabIndex(index)}
			>
				{element.props.title}
			</div>
		);
	};

	return (
		<TabsLayoutElement className="ui-tabs">
			<motion.header className="ui-tabs-header">
				{Array.isArray(children)
					? children.map(renderTab)
					: renderTab(children, 0)}
				<motion.div
					className="ui-tabs-tab-selector"
					style={{ width: `calc(100% / ${childrenLenght})` }}
					animate={selectorController}
				/>
			</motion.header>
			<motion.div className="ui-tabs-tab-body" animate={bodyController}>
				<ScrollableContainer flexDirection="column">
					{Array.isArray(children) ? children[tabIndex] : children}
				</ScrollableContainer>
			</motion.div>
		</TabsLayoutElement>
	);
}
