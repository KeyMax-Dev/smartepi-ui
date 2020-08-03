import React from 'react';
interface SelectProps<T> {
    data: T[];
    dataKey: keyof T;
    loading?: boolean;
    onSelect?: (event: React.MouseEvent<HTMLDivElement>, item: T) => void;
    onSearch?: (value: string) => void;
    value?: T;
    color?: string;
    invert?: boolean;
    placeholder?: string;
}
export default function Select<T>({ data, dataKey, loading, onSelect, onSearch, value, color, invert, placeholder }: SelectProps<T>): JSX.Element;
export {};
