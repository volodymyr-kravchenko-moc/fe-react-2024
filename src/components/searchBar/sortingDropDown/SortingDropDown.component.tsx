import { useState } from 'react';

import { SortingArrowClosedComponent } from '@/components/svg/SortingArrowClosed.component.tsx';
import { SortingArrowOpenedComponent } from '@/components/svg/SortingArrowOpened.component.tsx';

import styles from './sortingDropDown.module.css';

export const SortingDropDownComponent = () => {
    const [sortBy, setSortBy] = useState('Price (High - Low)');
    const [isOpen, setIsOpen] = useState(false);

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
                        <div onClick={() => handleSortChange('Price (High - Low)')} className={styles.dropdownItem}>
                            Price (High - Low)
                            <SortingArrowOpenedComponent />
                        </div>
                        <div onClick={() => handleSortChange('Price (Low - High)')} className={styles.dropdownItem}>
                            Price (Low - High)
                        </div>
                        <div onClick={() => handleSortChange('Newest')} className={styles.dropdownItem}>
                            Newest
                        </div>
                        <div onClick={() => handleSortChange('Oldest')} className={styles.dropdownItem}>
                            Oldest
                        </div>
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
