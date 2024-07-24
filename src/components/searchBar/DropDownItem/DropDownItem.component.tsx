import React from 'react';

import styles from '@/components/searchBar/DropDownItem/dropDownItem.module.css';
import type { DropDownItemProps } from '@/interfaces/DropDownItemProps.ts';

export const DropDownItemComponent: React.FC<DropDownItemProps> = ({ item, handleSortChange, children }) => (
    <div onClick={() => handleSortChange(item)} className={styles.dropdownItem}>
        {item}
        {children}
    </div>
);
