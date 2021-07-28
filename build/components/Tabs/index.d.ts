import React from 'react';
import Tab, { TabProps } from './tab';
interface TabsHeaderProps {
    index?: number;
    children: React.ReactElement<TabProps, typeof Tab> | React.ReactElement<TabProps, typeof Tab>[];
    onTabChange?: (index: number) => void;
}
export default function Tabs({ index, children, onTabChange, }: TabsHeaderProps): JSX.Element;
export {};
