import type React from 'react';

export interface DropDownItemProps {
    key: number;
    item: string;
    handleSortChange: (value: string) => void;
    children: React.ReactNode | null;
}
