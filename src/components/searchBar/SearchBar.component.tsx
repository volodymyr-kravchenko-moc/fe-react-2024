import React, { useState } from 'react';

import SearchIcon from '@/assets/searchBar/search-icon.svg?react';
import { SortingDropDownComponent } from '@/components/searchBar/sortingDropDown/SortingDropDown.component.tsx';

import styles from './searchBar.module.css';

export const SearchBar = () => {
    const categories = ['Electronics', 'Shoes', 'Clothes'];

    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('');

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
    };

    return (
        <div className={styles.searchBar}>
            <div className={styles.searchInputWrapper}>
                <input
                    type="text"
                    placeholder="Search..."
                    value={searchTerm}
                    onChange={handleSearchChange}
                    className={styles.searchInput}
                />
                <SearchIcon className={styles.searchIcon} />
            </div>
            <div className={styles.selectionWrapper}>
                <div className={styles.categorySelectionWrapper}>
                    {categories.map((category) => {
                        const buttonStyles =
                            category === selectedCategory
                                ? `${styles.activeCategoryButton} ${styles.categoryButton}`
                                : styles.categoryButton;
                        return (
                            <button
                                key={category}
                                className={buttonStyles}
                                onClick={() => {
                                    setSelectedCategory(category);
                                }}
                            >
                                {category}
                            </button>
                        );
                    })}
                </div>
            </div>
            <SortingDropDownComponent />
        </div>
    );
};
