import { useState } from 'react';

import { DropDownItemComponent } from '@/components/searchBar/DropDownItem/DropDownItem.component.tsx';
import { SortingArrowClosedComponent } from '@/components/svg/SortingArrowClosed.component.tsx';
import { SortingArrowOpenedComponent } from '@/components/svg/SortingArrowOpened.component.tsx';
import { SortingItem } from '@/enum/SortingItem.ts';

import styles from './sortingDropDown.module.css';

export const SortingDropDownComponent = () => {
    const [sortBy, setSortBy] = useState(SortingItem.PRICE_HIGH_LOW);
    const [isOpen, setIsOpen] = useState(false);
    const dropDownItems = Object.values(SortingItem);

    const handleSortChange = (value: string) => {
        setSortBy(value);
        setIsOpen(false);
    };

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={styles.sortByWrapper}>
            <span className={styles.sortByLabel}>Sort by:</span>
            {isOpen ? (
                <div className={styles.dropdownMenuWrapper}>
                    <div className={styles.dropdownMenu}>
                        {dropDownItems.map((item, index) => (
                            <DropDownItemComponent key={index} item={item} handleSortChange={handleSortChange}>
                                {index === 0 ? <SortingArrowOpenedComponent /> : null}
                            </DropDownItemComponent>
                        ))}
                    </div>
                </div>
            ) : (
                <button onClick={toggleDropdown} className={styles.sortBySelect}>
                    {sortBy}
                    <SortingArrowClosedComponent />
                </button>
            )}
        </div>
    );
};
