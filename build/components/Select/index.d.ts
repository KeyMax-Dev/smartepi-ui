import React from 'react';
interface SelectProps<T> {
    data: T[];
    dataKey: keyof T;
    loading?: boolean;
    onSelect?: (event: React.MouseEvent<HTMLDivElement>, item: T) => void;
    onSearch?: (value: string) => void;
    value?: string;
    color?: string;
    invert?: boolean;
}
export default function Select<T>({ data, dataKey, loading, onSelect, onSearch, value, color, invert }: SelectProps<T>): JSX.Element;
export {};
