import type React from 'react';
import { TableColumnElement } from './style';

export interface TableColumnProps extends React.ComponentPropsWithRef<'td'> {
	children: any & ((item: any, index: number) => React.ReactElement);
	name: string;
	flex?: number;
	minwidth?: string;
	maxwidth?: string;
}

export default function TableColumn(
	props: TableColumnProps,
): React.ReactElement {
	return <TableColumnElement {...props} />;
}
