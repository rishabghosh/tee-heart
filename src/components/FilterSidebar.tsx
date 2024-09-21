// components/FilterSidebar.tsx
import React from 'react';
import styles from '../styles/FilterSidebar.module.scss';

const FilterSidebar: React.FC = () => {
    return (
        <div className={styles.sidebar}>
            <h3>Categories</h3>
            <ul>
                <li><input type="checkbox" /> T-Shirts</li>
                <li><input type="checkbox" /> Polo Shirts</li>
                <li><input type="checkbox" /> Hoodies</li>
            </ul>

            <h3>Theme</h3>
            <ul>
                <li><input type="checkbox" /> Casual</li>
                <li><input type="checkbox" /> Sports</li>
                <li><input type="checkbox" /> Formal</li>
            </ul>

            <h3>Sizes</h3>
            <ul>
                <li><input type="checkbox" /> S</li>
                <li><input type="checkbox" /> M</li>
                <li><input type="checkbox" /> L</li>
                <li><input type="checkbox" /> XL</li>
            </ul>

            <h3>Price Range</h3>
            <ul>
                <li><input type="checkbox" /> $10 - $25</li>
                <li><input type="checkbox" /> $26 - $50</li>
                <li><input type="checkbox" /> $51 - $100</li>
            </ul>
        </div>
    );
};

export default FilterSidebar;
