import React, { useState } from 'react';
import styles from '../styles/FilterSidebar.module.scss';

interface FilterSidebarProps {
    categories: string[];
    themes: string[];
    sizes: string[];
    onFilterChange: (filterType: 'categories' | 'themes' | 'sizes', values: string[]) => void;
}

const FilterSidebar: React.FC<FilterSidebarProps> = ({
                                                         categories,
                                                         themes,
                                                         sizes,
                                                         onFilterChange,
                                                     }) => {
    const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
    const [selectedThemes, setSelectedThemes] = useState<string[]>([]);
    const [selectedSizes, setSelectedSizes] = useState<string[]>([]);

    const handleCheckboxChange = (filterType: 'categories' | 'themes', value: string) => {
        let updatedValues: string[];

        if (filterType === 'categories') {
            updatedValues = selectedCategories.includes(value)
                ? selectedCategories.filter(item => item !== value)
                : [...selectedCategories, value];
            setSelectedCategories(updatedValues);
            onFilterChange('categories', updatedValues);
        } else if (filterType === 'themes') {
            updatedValues = selectedThemes.includes(value)
                ? selectedThemes.filter(item => item !== value)
                : [...selectedThemes, value];
            setSelectedThemes(updatedValues);
            onFilterChange('themes', updatedValues);
        }
    };

    const handleSizeClick = (size: string) => {
        const updatedSizes = selectedSizes.includes(size)
            ? selectedSizes.filter(s => s !== size)
            : [...selectedSizes, size];

        setSelectedSizes(updatedSizes);
        onFilterChange('sizes', updatedSizes);
    };

    return (
        <div className={styles.sidebar}>
            <h3>Categories</h3>
            <ul>
                {categories.map(category => (
                    <li key={category} className={styles.listItem}>
                        <input
                            type="checkbox"
                            checked={selectedCategories.includes(category)}
                            className={styles.checkbox}
                            onChange={() => handleCheckboxChange('categories', category)}
                        />
                        <label>{category}</label>
                    </li>
                ))}
            </ul>

            <h3>Themes</h3>
            <ul>
                {themes.map(theme => (
                    <li key={theme} className={styles.listItem}>
                        <input
                            type="checkbox"
                            checked={selectedThemes.includes(theme)}
                            className={styles.checkbox}
                            onChange={() => handleCheckboxChange('themes', theme)}
                        />
                        <label>{theme}</label>
                    </li>
                ))}
            </ul>

            <h3>Sizes</h3>
            <div className={styles.sizeButtons}>
                {sizes.map(size => (
                    <button
                        key={size}
                        className={`${styles.sizeButton} ${
                            selectedSizes.includes(size) ? styles.selectedSizeButton : ''
                        }`}
                        onClick={() => handleSizeClick(size)}
                    >
                        {size}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default FilterSidebar;
