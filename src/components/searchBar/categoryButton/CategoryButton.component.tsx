import React from 'react';

import styles from '@/components/searchBar/categoryButton/categoryButton.module.css';
import type { CategoryButtonProps } from '@/interfaces/CategoryButtonProps.ts';

export const CategoryButton: React.FC<CategoryButtonProps> = ({ key, category, selectedCategory, setSelectedCategory }) => {
    const buttonStyles = category === selectedCategory ? `${styles.activeCategoryButton} ${styles.categoryButton}` : styles.categoryButton;

    return (
        <button
            key={key}
            className={buttonStyles}
            onClick={() => {
                setSelectedCategory(category);
            }}
        >
            {category}
        </button>
    );
};
