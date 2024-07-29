import { useEffect, useRef, useState } from 'react';

import { DropDownItemComponent } from '@/components/searchBar/DropDownItem/DropDownItem.component.tsx';
import { SortingArrowClosedComponent } from '@/components/svg/SortingArrowClosed.component.tsx';
import { SortingArrowOpenedComponent } from '@/components/svg/SortingArrowOpened.component.tsx';
import { SortingItem } from '@/enum/SortingItem.ts';

import styles from './sortingDropDown.module.css';

export const SortingDropDownComponent = () => {
    const [sortBy, setSortBy] = useState(SortingItem.PRICE_HIGH_LOW);
    const [isOpen, setIsOpen] = useState(false);
    const dropDownItems = Object.values(SortingItem);
    const dropdownReference = useRef<HTMLDivElement | null>(null);

    const handleSortChange = (value: SortingItem) => {
        setSortBy(value);
        setIsOpen(false);
    };

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleKeyDown = (event: KeyboardEvent) => {
        if (event.key === 'Escape') {
            setIsOpen(false);
        }
    };

    const handleClickOutside = (event: MouseEvent) => {
        if (dropdownReference.current && !dropdownReference.current.contains(event.target as Node)) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        if (isOpen) {
            document.addEventListener('keydown', handleKeyDown);
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('keydown', handleKeyDown);
            document.removeEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen]);

    return (
        <div className={styles.sortByWrapper} ref={dropdownReference}>
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
