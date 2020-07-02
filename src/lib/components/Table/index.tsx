import React, { EventHandler } from 'react';
import { TableElement, TableBodyElement, TableHeaderElement } from "./style";
import TableColumn, { TableColumnProps } from './table-column';
import ScrollableContainer from './../ScrollableContainer/index';

type TableItem = { [key: string]: unknown };
type TableColumnReactElement = React.ReactElement<TableColumnProps, typeof TableColumn>;
type TableChildren = TableColumnReactElement | false | undefined;
type DOMEvents = Exclude<keyof React.DOMAttributes<HTMLTableRowElement>, 'children' | 'dangerouslySetInnerHTML'>;
type TableRowEvent = React.SyntheticEvent;

export type TableRowEventHandler = (event: TableRowEvent, tableItem: TableItem) => void;
export type TableRowProps = Omit<React.ComponentProps<'tr'>, DOMEvents>;
export type TableRowEvents = Partial<{ [K in DOMEvents]: TableRowEventHandler }>;

interface TableProps {
    table: TableItem[];
    children: TableChildren[];
    rowProps?: TableRowProps;
    rowEvents?: TableRowEvents;
}

export default function Table(props: TableProps): JSX.Element {

    const children: TableColumnReactElement[] = props.children.filter((ele): ele is TableColumnReactElement => typeof ele === 'object');
    const rowProps = props.rowProps || {};
    const rowEvents = props.rowEvents || {};

    const renderLine = (element: TableItem, index: number): JSX.Element => {
        const events: { [key: string]: EventHandler<TableRowEvent> } = {};
        Object.entries(rowEvents).forEach(([key, event]) =>
            events[key] = (nativeEvent: TableRowEvent): void => event ? event(nativeEvent, element) : undefined);

        return <tr key={index} {...rowProps} {...events}>{
            children.map((column: TableColumnReactElement) => React.cloneElement(column, column.props, column.props.children(element, index)))
        }</tr>;
    };

    return (
        <TableElement>
            <TableHeaderElement>
                <tr>
                    {children.map((child: TableColumnReactElement) => <th key={child.props.name} style={{ flex: child.props.flex, minWidth: child.props.width, maxWidth: child.props.width }} {...child.props}>{child.props.name}</th>)}
                </tr>
            </TableHeaderElement>
            <TableBodyElement>
                <ScrollableContainer flexDirection="column">
                    {props.table.map(renderLine)}
                </ScrollableContainer>
            </TableBodyElement>
        </TableElement>
    );
}