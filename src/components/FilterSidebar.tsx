import React from 'react';
import { useFilterState } from '@/hooks/useFilterState';
import styles from '@/styles/FilterSidebar.module.scss';
import { ProductExtended } from "@/models/ProductExtended";

interface FilterSidebarProps {
    products: ProductExtended[];
    onFilter: (filteredProducts: ProductExtended[]) => void;
}

const FilterSidebar: React.FC<FilterSidebarProps> = ({ products, onFilter }) => {
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
    );
};

export default FilterSidebar;
