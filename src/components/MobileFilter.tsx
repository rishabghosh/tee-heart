import React from 'react';
import { useFilterState } from '@/hooks/useFilterState';
import styles from '@/styles/MobileFilter.module.scss';
import { ProductExtended } from '@/models/ProductExtended';

interface MobileFilterProps {
    products: ProductExtended[];
    onFilter: (filteredProducts: ProductExtended[]) => void;
    onClose: () => void; // Function to close the filter modal
}

const MobileFilter: React.FC<MobileFilterProps> = ({ products, onFilter, onClose }) => {
    const {
        selectedCategories,
        selectedThemes,
        selectedSizes,
        handleCheckboxChange,
        handleSizeClick,
        categories,
        themes,
        sizes,
    } = useFilterState(products, onFilter);

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

            <button className={styles.applyButton} onClick={onClose}>
                Apply Filters
            </button>
        </div>
    );
};

export default MobileFilter;
