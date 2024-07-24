import type React from 'react';

import type { SortingItem } from '@/enum/SortingItem.ts';

export interface DropDownItemProps {
    key: number;
    item: string;
    handleSortChange: (value: SortingItem) => void;
    children: React.ReactNode | null;
}
