import { motion } from 'framer-motion';
import { TableElement, TableBodyElement, TableHeaderElement } from "./style";
import React, { EventHandler } from 'react';
import Spinners from '../../assets/svgs/spinners';
import TableColumn, { TableColumnProps } from './table-column';

type TableItem = { [key: string]: unknown };
type TableColumnReactElement = React.ReactElement<TableColumnProps, typeof TableColumn>;
type TableChildren = TableColumnReactElement | false | undefined;
type DOMEvents = Exclude<keyof React.DOMAttributes<HTMLTableRowElement>, 'children' | 'dangerouslySetInnerHTML'>;
type TableRowEvent = React.SyntheticEvent;

export type TableRowEventHandler = (event: TableRowEvent, tableItem: any) => void;
export type TableRowProps = Omit<React.ComponentProps<'tr'>, DOMEvents>;
export type TableRowEvents = Partial<{ [K in DOMEvents]: TableRowEventHandler }>;
export type TableBodyEvents = Partial<{ [K in DOMEvents]: React.SyntheticEvent }>;

interface TableProps {
    table: TableItem[];
    children: TableChildren[];
    rowProps?: TableRowProps;
    rowEvents?: TableRowEvents;
    onScroll?: (event: React.UIEvent<HTMLTableSectionElement>) => void;
    loading?: boolean;
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
            {(props.table.length > 0 && !props.loading) &&
                <TableHeaderElement>
                    <tr>
                        {children.map((child: TableColumnReactElement) => <th key={child.props.name} style={{ flex: child.props.flex, minWidth: child.props.minwidth, maxWidth: child.props.maxwidth }} {...child.props}>{child.props.name}</th>)}
                    </tr>
                </TableHeaderElement>
            }
            {(props.table.length > 0 && !props.loading) &&
                <TableBodyElement onScroll={props.onScroll}>
                    {props.table.map(renderLine)}
                </TableBodyElement>
            }
            {(props.table.length === 0 && !props.loading) &&
                <motion.div className="loading-container">
                    Nenhum dado para ser exibido.
                </motion.div>
            }
            {props.loading &&
                <motion.div className="loading-container">
                    <Spinners.circles width="200px" height="200px" />
                    Carregando dados...
                </motion.div>
            }
        </TableElement>
    );
}