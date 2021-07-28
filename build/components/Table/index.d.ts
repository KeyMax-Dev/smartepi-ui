import { HTMLMotionProps } from 'framer-motion';
import React from 'react';
import TableColumn, { TableColumnProps } from './table-column';
declare type TableItem = {
    [key: string]: unknown;
};
declare type TableColumnReactElement = React.ReactElement<TableColumnProps, typeof TableColumn>;
declare type TableChild = TableColumnReactElement | boolean | null | undefined;
declare type DOMEvents = Exclude<keyof React.DOMAttributes<HTMLTableRowElement>, 'children' | 'dangerouslySetInnerHTML'>;
declare type TableRowEvent = React.SyntheticEvent;
export declare type TableRowEventHandler = (event: TableRowEvent, tableItem: any) => void;
export declare type TableRowProps = Omit<HTMLMotionProps<'tr'>, DOMEvents>;
export declare type TableRowEvents = Partial<{
    [K in DOMEvents]: TableRowEventHandler;
}>;
export declare type TableBodyEvents = Partial<{
    [K in DOMEvents]: React.SyntheticEvent;
}>;
declare type TableConfig = {
    rowProps: TableRowProps;
    rowEvents: TableRowEvents;
    onScroll?: (event: React.UIEvent<HTMLTableSectionElement>) => void;
    loadingMessage: string;
    innerLoadingMessage: string;
    emptyMessage: string;
};
interface TableProps {
    data: TableItem[];
    children: TableChild | TableChild[];
    loading?: boolean;
    config?: Partial<TableConfig>;
}
export default function Table({ data, children, loading, config, }: TableProps): JSX.Element;
export {};
