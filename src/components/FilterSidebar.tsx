import React, { useState, useEffect } from 'react';
import styles from '../styles/FilterSidebar.module.scss';
import { Product } from '@/models/Product';

interface FilterSidebarProps {
    products: Product[];
    onFilter: (filteredProducts: Product[]) => void;
}

const FilterSidebar: React.FC<FilterSidebarProps> = ({ products, onFilter }) => {
    const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
    const [selectedThemes, setSelectedThemes] = useState<string[]>([]);
    const [selectedSizes, setSelectedSizes] = useState<string[]>([]);

    // Get distinct categories, themes, and sizes from the products
    const categories = Array.from(new Set(products.map(product => product.category)));
    const themes = Array.from(new Set(products.map(product => product.theme)));
    const sizes = Array.from(new Set(products.flatMap(product => product.sizes)));

    useEffect(() => {
        const applyFilters = () => {
            let filtered = products;

            if (selectedCategories.length > 0) {
                filtered = filtered.filter(product =>
                    selectedCategories.includes(product.category)
                );
            }

            if (selectedThemes.length > 0) {
                filtered = filtered.filter(product =>
                    selectedThemes.includes(product.theme)
                );
            }

            if (selectedSizes.length > 0) {
                filtered = filtered.filter(product =>
                    product.sizes.some(size => selectedSizes.includes(size))
                );
            }

            onFilter(filtered);
        };

        applyFilters();
    }, [selectedCategories, selectedThemes, selectedSizes, products, onFilter]);

    const handleCheckboxChange = (filterType: 'categories' | 'themes', value: string) => {
        let updatedValues: string[];

        if (filterType === 'categories') {
            updatedValues = selectedCategories.includes(value)
                ? selectedCategories.filter(item => item !== value)
                : [...selectedCategories, value];
            setSelectedCategories(updatedValues);
        } else if (filterType === 'themes') {
            updatedValues = selectedThemes.includes(value)
                ? selectedThemes.filter(item => item !== value)
                : [...selectedThemes, value];
            setSelectedThemes(updatedValues);
        }
    };

    const handleSizeClick = (size: string) => {
        const updatedSizes = selectedSizes.includes(size)
            ? selectedSizes.filter(s => s !== size)
            : [...selectedSizes, size];

        setSelectedSizes(updatedSizes);
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
