import { HTMLMotionProps, motion } from 'framer-motion';
import { TableElement, TableBodyElement, TableHeaderElement } from './style';
import React, { EventHandler, useEffect, useRef, useState } from 'react';
import Spinners from '../../assets/svgs/spinners';
import TableColumn, { TableColumnProps } from './table-column';
import Animations from '../../assets/animations';

type TableItem = { [key: string]: unknown };
type TableColumnReactElement = React.ReactElement<
	TableColumnProps,
	typeof TableColumn
>;
type TableChild = TableColumnReactElement | boolean | null | undefined;
type DOMEvents = Exclude<
	keyof React.DOMAttributes<HTMLTableRowElement>,
	'children' | 'dangerouslySetInnerHTML'
>;
type TableRowEvent = React.SyntheticEvent;

export type TableRowEventHandler = (
	event: TableRowEvent,
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	tableItem: any
) => void;
export type TableRowProps = Omit<HTMLMotionProps<'tr'>, DOMEvents>;
export type TableRowEvents = Partial<
	{ [K in DOMEvents]: TableRowEventHandler }
>;
export type TableBodyEvents = Partial<
	{ [K in DOMEvents]: React.SyntheticEvent }
>;

type TableConfig = {
	rowProps: TableRowProps;
	rowEvents: TableRowEvents;
	onScroll?: (event: React.UIEvent<HTMLTableSectionElement>) => void;
	loadingMessage: string;
	innerLoadingMessage: string;
	emptyMessage: string;
};

const DEFAULT_TABLE_CONFIG: TableConfig = {
	rowProps: {},
	rowEvents: {},
	loadingMessage: 'Carregando dados...',
	innerLoadingMessage: 'Carregando mais dados...',
	emptyMessage: 'Nenhum dado para ser exibido.',
};

interface TableProps {
	data: TableItem[];
	children: TableChild | TableChild[];
	loading?: boolean;
	config?: Partial<TableConfig>;
}

const mapChildren = (
	children: TableChild | TableChild[]
): TableColumnReactElement[] => {
	if (Array.isArray(children)) {
		return children.filter(
			(ele): ele is TableColumnReactElement =>
				typeof ele === 'object' && ele?.type === TableColumn
		);
	} else {
		if (typeof children === 'object') {
			return children?.type === TableColumn ? [children] : [];
		} else {
			return [];
		}
	}
};

export default function Table({
	data,
	children,
	loading,
	config,
}: TableProps): JSX.Element {
	const mappedChildren: TableColumnReactElement[] = mapChildren(children);
	const baseConfig = Object.assign({}, DEFAULT_TABLE_CONFIG, config);
	const [animationIndex, setAnimationIndex] = useState<number>(0);
	const tableBodyRef = useRef<HTMLTableSectionElement>(null);

	const renderLine = (element: TableItem, index: number): JSX.Element => {
		const events: { [key: string]: EventHandler<TableRowEvent> } = {};
		Object.entries(baseConfig.rowEvents).forEach(
			([key, event]) =>
				(events[key] = (nativeEvent: TableRowEvent): void =>
					event ? event(nativeEvent, element) : undefined)
		);
		return (
			<motion.tr
				key={index}
				initial={Animations.ListItemInitial}
				animate={Animations.ListItemIn(
					index < animationIndex
						? 0
						: (index - animationIndex) /
								(data?.length - animationIndex)
				)}
				{...baseConfig.rowProps}
				{...events}
			>
				{mappedChildren.map((column: TableColumnReactElement) =>
					React.cloneElement(
						column,
						column.props,
						column.props.children(element, index)
					)
				)}
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
				tableBodyRef.current.scrollTo({
					top: tableBodyRef.current.scrollHeight,
					behavior: 'smooth',
				});
			}
		}
	}, [loading]);

	return (
		<TableElement className="ui-table">
			{data.length > 0 && (
				<TableHeaderElement className="ui-table-header">
					<tr>
						{mappedChildren.map(
							(child: TableColumnReactElement) => (
								<th
									key={child.props.name}
									style={{
										flex: child.props.flex,
										minWidth: child.props.minwidth,
										maxWidth: child.props.maxwidth,
									}}
									{...child.props}
								>
									{child.props.name}
								</th>
							)
						)}
					</tr>
				</TableHeaderElement>
			)}
			{data.length > 0 && (
				<TableBodyElement
					onScroll={baseConfig.onScroll}
					className="ui-table-body"
					ref={tableBodyRef}
				>
					{data.map(renderLine)}
					{loading && (
						<tr className="ui-table-inner-loading-container">
							<td>
								<Spinners.circles
									width="100px"
									height="100px"
								/>
								{baseConfig.innerLoadingMessage}
							</td>
						</tr>
					)}
				</TableBodyElement>
			)}
			{data.length === 0 && !loading && (
				<motion.tbody className="ui-table-loading-container">
					<tr>
						<td>{baseConfig.emptyMessage}</td>
					</tr>
				</motion.tbody>
			)}
			{data.length === 0 && loading && (
				<motion.tbody className="ui-table-loading-container">
					<tr>
						<td>
							<Spinners.circles width="200px" height="200px" />
							{baseConfig.loadingMessage}
						</td>
					</tr>
				</motion.tbody>
			)}
		</TableElement>
	);
}
