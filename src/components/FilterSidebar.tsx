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
            <input type="text" placeholder="Search for Categories" className={styles.searchInput} />
            <ul>
                {categories.map((category, index) => (
                    <li key={index}>
                        <input type="checkbox" /> {category}
                    </li>
                ))}
            </ul>

            <h3>Themes</h3>
            <input type="text" placeholder="Search for Themes" className={styles.searchInput} />
            <ul>
                {themes.map((theme, index) => (
                    <li key={index}>
                        <input type="checkbox" /> {theme}
                    </li>
                ))}
            </ul>

            <h3>Sizes</h3>
            <input type="text" placeholder="Search for Size" className={styles.searchInput} />
            <div className={styles.sizeButtons}>
                {sizes.map((size, index) => (
                    <button key={index} className={styles.sizeButton}>
                        {size}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default FilterSidebar;
