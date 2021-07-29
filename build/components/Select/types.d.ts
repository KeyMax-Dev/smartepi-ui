import React from 'react';
export interface SelectProps<T> {
    data: T[];
    dataKey: keyof T;
    loading?: boolean;
    onSelect?: (event: React.MouseEvent<HTMLDivElement | HTMLButtonElement>, item: T | undefined) => void;
    onSearch?: (value: string) => void;
    onOpen?: () => void;
    onClose?: () => void;
    value?: T;
    color?: string;
    invert?: boolean;
    placeholder?: string;
    containerType?: 'outline' | 'downline';
    enableClear?: boolean;
}
