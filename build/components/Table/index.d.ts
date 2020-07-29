import React from 'react';
import TableColumn, { TableColumnProps } from './table-column';
declare type TableItem = {
    [key: string]: unknown;
};
declare type TableColumnReactElement = React.ReactElement<TableColumnProps, typeof TableColumn>;
declare type TableChildren = TableColumnReactElement | TableColumnReactElement[] | false | undefined;
declare type DOMEvents = Exclude<keyof React.DOMAttributes<HTMLTableRowElement>, 'children' | 'dangerouslySetInnerHTML'>;
declare type TableRowEvent = React.SyntheticEvent;
export declare type TableRowEventHandler = (event: TableRowEvent, tableItem: any) => void;
export declare type TableRowProps = Omit<React.ComponentProps<'tr'>, DOMEvents>;
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
    emptyMessage: string;
};
interface TableProps {
    data: TableItem[];
    children: TableChildren;
    loading?: boolean;
    config?: Partial<TableConfig>;
}
export default function Table({ data, children, loading, config }: TableProps): JSX.Element;
export {};
