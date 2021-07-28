import React from 'react';
import { TableColumnElement } from './style';

export interface TableColumnProps extends React.ComponentPropsWithRef<'td'> {
	children: (item: any, index: number) => JSX.Element;
	name: string;
	flex?: number;
	minwidth?: string;
	maxwidth?: string;
}

export default function TableColumn(props: TableColumnProps): JSX.Element {
	return <TableColumnElement {...props} />;
}
