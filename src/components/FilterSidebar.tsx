// components/FilterSidebar.tsx
import React from 'react';
import styles from '../styles/FilterSidebar.module.scss';

interface FilterSidebarProps {
    categories: string[];
    themes: string[];
    sizes: string[];
    priceRanges: string[];
}

const FilterSidebar: React.FC<FilterSidebarProps> = ({
                                                         categories,
                                                         themes,
                                                         sizes,
                                                         priceRanges,
                                                     }) => {
    return (
        <div className={styles.sidebar}>
            <h3>Categories</h3>
            <ul>
                {categories.map((category, index) => (
                    <li key={index}><input type="checkbox" /> {category}</li>
                ))}
            </ul>

            <h3>Themes</h3>
            <ul>
                {themes.map((theme, index) => (
                    <li key={index}><input type="checkbox" /> {theme}</li>
                ))}
            </ul>

            <h3>Sizes</h3>
            <ul>
                {sizes.map((size, index) => (
                    <li key={index}><input type="checkbox" /> {size}</li>
                ))}
            </ul>

            <h3>Price Range</h3>
            <ul>
                {priceRanges.map((priceRange, index) => (
                    <li key={index}><input type="checkbox" /> {priceRange}</li>
                ))}
            </ul>
        </div>
    );
};

export default FilterSidebar;
