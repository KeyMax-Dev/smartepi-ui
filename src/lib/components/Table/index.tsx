import { HTMLMotionProps, motion } from 'framer-motion';
import { TableElement, TableBodyElement, TableHeaderElement } from "./style";
import React, { EventHandler, useEffect, useRef, useState } from 'react';
import Spinners from '../../assets/svgs/spinners';
import TableColumn, { TableColumnProps } from './table-column';
import Animations from '../../assets/animations';

type TableColumnReactElement<T> = React.ReactElement<TableColumnProps<T>, typeof TableColumn>;
type TableChild<T> = TableColumnReactElement<T> | boolean | null | undefined;
type DOMEvents = Exclude<keyof React.DOMAttributes<HTMLTableRowElement>, 'children' | 'dangerouslySetInnerHTML'>;
type TableRowEvent = React.SyntheticEvent;

export type TableRowEventHandler<T> = (event: TableRowEvent, tableItem: T) => void;
export type TableRowProps = Omit<HTMLMotionProps<'tr'>, DOMEvents>;
export type TableRowEvents<T> = Partial<{ [K in DOMEvents]: TableRowEventHandler<T> }>;
export type TableBodyProps = React.ComponentProps<'tbody'>;

interface TableConfig<T> {
    rowProps: TableRowProps;
    rowEvents: TableRowEvents<T>;
    bodyProps: TableBodyProps;
    loadingMessage: string;
    innerLoadingMessage: string;
    emptyMessage: string;
}

const DEFAULT_TABLE_CONFIG: TableConfig<{}> = {
    rowProps: {},
    rowEvents: {},
    bodyProps: {},
    loadingMessage: 'Carregando dados...',
    innerLoadingMessage: 'Carregando mais dados...',
    emptyMessage: 'Nenhum dado para ser exibido.'
};

interface TableProps<T = {}> {
    data: T[];
    children: TableChild<T> | TableChild<T>[];
    loading?: boolean;
    config?: Partial<TableConfig<T>>;
}

function mapChildren<T>(children: TableChild<T>| TableChild<T>[]): TableColumnReactElement<T>[] {
    if (Array.isArray(children)) {
        return children.filter((ele): ele is TableColumnReactElement<T> => typeof ele === 'object' && ele?.type === TableColumn);
    } else {
        if (typeof children === 'object') {
            return children?.type === TableColumn ? [children] : [];
        } else {
            return [];
        }
    }
};

export default function Table<T>({ data, children, loading, config }: TableProps<T>): JSX.Element {

    const mappedChildren: TableColumnReactElement<T>[] = mapChildren(children);
    const baseConfig = Object.assign({}, DEFAULT_TABLE_CONFIG, config);
    const [animationIndex, setAnimationIndex] = useState<number>(0);
    const tableBodyRef = useRef<HTMLTableSectionElement>(null);

    const renderLine = (element: T, index: number): JSX.Element => {
        const events: { [key: string]: EventHandler<TableRowEvent> } = {};
        Object.entries(baseConfig.rowEvents).forEach(([key, event]) =>
            events[key] = (nativeEvent: TableRowEvent): void => event ? event(nativeEvent, element) : undefined);
        return (
            <motion.tr
                key={index}
                initial={Animations.ListItemInitial}
                animate={Animations.ListItemIn(index < animationIndex ? 0 : (index - animationIndex) / (data?.length - animationIndex))}
                {...baseConfig.rowProps}
                {...events}>
                {mappedChildren.map((column: TableColumnReactElement<T>) => React.cloneElement(column, column.props, column.props.children(element, index)))}
            </motion.tr>
        );
    };

    useEffect(() => {
        if (data.length > 0) {
            setAnimationIndex(data.length - 1);
        } else {
            setAnimationIndex(0);
        }
    }, [data]);

    useEffect(() => {
        if (data.length > 0 && loading) {
            if (tableBodyRef.current) {
                tableBodyRef.current.scrollTo({ top: tableBodyRef.current.scrollHeight, behavior: 'smooth' });
            }
        };
    }, [loading]);

    return (
        <TableElement className="ui-table">
            {(data.length > 0) &&
                <TableHeaderElement className="ui-table-header">
                    <tr>
                        {mappedChildren.map((child: TableColumnReactElement<T>) =>
                            <th
                                key={child.props.name}
                                style={{ flex: child.props.flex, minWidth: child.props.minwidth, maxWidth: child.props.maxwidth }}
                                {...child.props}
                            >
                                {child.props.name}
                            </th>
                        )}
                    </tr>
                </TableHeaderElement>
            }
            {(data.length > 0) &&
                <TableBodyElement {...baseConfig.bodyProps} className={`ui-table-body ${baseConfig.bodyProps.className || ''}`} ref={tableBodyRef}>
                    {data.map(renderLine)}
                    {loading &&
                        <tr className="ui-table-inner-loading-container">
                            <td>
                                <Spinners.circles width="100px" height="100px" />
                                {baseConfig.innerLoadingMessage}
                            </td>
                        </tr>
                    }
                </TableBodyElement>
            }
            {(data.length === 0 && !loading) &&
                <tbody {...baseConfig.bodyProps} className="ui-table-loading-container">
                    <tr><td>
                        {baseConfig.emptyMessage}
                    </td></tr>
                </tbody>
            }
            {(data.length === 0 && loading) &&
                <tbody {...baseConfig.bodyProps}  className="ui-table-loading-container">
                    <tr><td>
                        <Spinners.circles width="200px" height="200px" />
                        {baseConfig.loadingMessage}
                    </td></tr>
                </tbody>
            }
        </TableElement>
    );
}