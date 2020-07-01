import { TabsLayoutElement } from './style';
import { useAnimation, motion } from 'framer-motion';
import React, { useState, useEffect, ReactElement } from 'react';
import Tab, { TabProps } from './tab';

interface TabsHeaderProps {
    index?: number;
    children: React.ReactElement<TabProps, typeof Tab> | React.ReactElement<TabProps, typeof Tab>[];
    onTabChange?: (index: number) => void;
}

export default function Tabs({ index, children, onTabChange }: TabsHeaderProps): JSX.Element {

    const [tabIndex, setTabIndex] = useState(index || 0);
    const selectorController = useAnimation();
    const bodyController = useAnimation();
    const childrenLenght = Array.isArray(children) ? children.length : 1;

    useEffect(() => {
        selectorController.start({
            left: `calc(${100 * tabIndex / childrenLenght}%)`,
            transition: { duration: 0.2, ease: 'easeIn' }
        });

        // TODO: Define tab body animation
        // bodyController.start({
        //     opacity: [0, 1],
        //     transition: { duration: 0.2, ease: 'easeIn' }
        // });

        if (onTabChange) onTabChange(tabIndex);
    }, [tabIndex]);

    useEffect(() => {
        if (index) {
            setTabIndex(index);
        }
    }, [index]);

    const renderTab = (element: ReactElement, index: number): JSX.Element => {
        return <div key={index} className={`tab ${tabIndex === index ? 'tab-selected' : ''}`} onClick={(): void => setTabIndex(index)}>{element.props.title}</div>;
    };

    return (
        <TabsLayoutElement className="tabs-layout">
            <motion.header className="tabs-header">
                {Array.isArray(children) ? children.map(renderTab) : renderTab(children, 0)}
                <motion.div className="tab-selector" style={{ width: `calc(100% / ${childrenLenght})` }} animate={selectorController} />
            </motion.header>
            <motion.div className="tab-body" animate={bodyController} >
                {Array.isArray(children) ? children[tabIndex] : children}
            </motion.div>
        </TabsLayoutElement>
    );
}