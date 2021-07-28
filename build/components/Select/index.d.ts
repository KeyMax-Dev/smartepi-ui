import React from 'react';
interface SelectProps<T> {
    data: T[];
    dataKey: keyof T;
    loading?: boolean;
    onSelect?: (event: React.MouseEvent<HTMLDivElement>, item: T) => void;
    onSearch?: (value: string) => void;
    onOpen?: () => void;
    onClose?: () => void;
    value?: T;
    color?: string;
    invert?: boolean;
    placeholder?: string;
    containerType?: 'outline' | 'downline';
}
export default function Select<T>({ data, dataKey, loading, onSelect, onSearch, onOpen, onClose, value, color, invert, placeholder, containerType, }: SelectProps<T>): JSX.Element;
export {};
