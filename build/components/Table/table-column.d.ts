import React from 'react';
export interface TableColumnProps extends React.ComponentPropsWithRef<'td'> {
    children: (item: any, index: number) => JSX.Element;
    name: string;
    flex?: number;
    width?: string;
}
export default function TableColumn(props: TableColumnProps): JSX.Element;
