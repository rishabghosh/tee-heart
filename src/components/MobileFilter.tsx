import React, { useState } from 'react';
import styles from '@/styles/MobileFilter.module.scss';
import { ProductExtended } from '@/models/ProductExtended';

interface MobileFilterProps {
    products: ProductExtended[];
    onFilter: (filteredProducts: ProductExtended[]) => void;
    onClose: () => void; // Function to close the filter modal
}

const MobileFilter: React.FC<MobileFilterProps> = ({ products, onFilter, onClose }) => {
    const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
    const [selectedThemes, setSelectedThemes] = useState<string[]>([]);
    const [selectedSizes, setSelectedSizes] = useState<string[]>([]);

    const categories = Array.from(new Set(products.map(product => product.category)));
    const themes = Array.from(new Set(products.map(product => product.theme)));
    const sizes = Array.from(new Set(products.flatMap(product => product.sizes)));

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
        onClose(); // Close the filter modal after applying filters
    };

    const handleCheckboxChange = (filterType: 'categories' | 'themes', value: string) => {
        if (filterType === 'categories') {
            const updatedCategories = selectedCategories.includes(value)
                ? selectedCategories.filter(item => item !== value)
                : [...selectedCategories, value];
            setSelectedCategories(updatedCategories);
        } else if (filterType === 'themes') {
            const updatedThemes = selectedThemes.includes(value)
                ? selectedThemes.filter(item => item !== value)
                : [...selectedThemes, value];
            setSelectedThemes(updatedThemes);
        }
    };

    const handleSizeClick = (size: string) => {
        const updatedSizes = selectedSizes.includes(size)
            ? selectedSizes.filter(s => s !== size)
            : [...selectedSizes, size];
        setSelectedSizes(updatedSizes);
    };

    return (
        <div className={styles.mobileFilter}>
            <div className={styles.header}>
                <button className={styles.closeButton} onClick={onClose}>
                    Close
                </button>
                <h3>Filter Options</h3>
            </div>

            <div className={styles.filterContent}>
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
                <div className={styles.sizeOptions}>
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

            <button className={styles.applyButton} onClick={applyFilters}>
                Apply Filters
            </button>
        </div>
    );
};

export default MobileFilter;
