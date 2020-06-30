import React from 'react';
import Tab, { TabProps } from './tab';
declare type asd = React.ReactElement<TabProps, typeof Tab>;
interface TabsHeaderProps {
    index?: number;
    children: asd | asd[];
    onTabChange?: (index: number) => void;
}
export default function TabsLayout({ index, children, onTabChange }: TabsHeaderProps): JSX.Element;
export {};
