import React from 'react';
import { TableColumnElement } from "./style";

export interface TableColumnProps<T = any> extends React.ComponentPropsWithRef<'td'>{
    children: (item: T, index: number) => JSX.Element;
    name: string;
    flex?: number;
    minwidth?: string;
    maxwidth?: string;
}

export default function TableColumn<T = any>(props: TableColumnProps<T>): JSX.Element {
    return (
        <TableColumnElement {...props} />
    );
}