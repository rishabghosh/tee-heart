// pages/men.tsx
import React, { useState, useEffect } from 'react';

import NavBar from '../components/NavBar';
import ProductCard from '../components/ProductCard';
import FilterSidebar from '../components/FilterSidebar';
import styles from '../styles/Category.module.scss';
import {Product} from "@/models/Product";

const products: Product[] = [
    { id: 1, name: 'Classic T-Shirt', price: '$25', imageUrl: '/images/mens/tshirt1.jpg', category: 'T-Shirts', theme: 'Breaking Bad', sizes: ['M', 'L', 'XL'] },
    { id: 2, name: 'Polo Shirt', price: '$35', imageUrl: '/images/mens/polo1.jpg', category: 'Polo Shirts', theme: 'Harry Potter', sizes: ['S', 'M', 'L'] },
    { id: 3, name: 'Hoodie', price: '$45', imageUrl: '/images/mens/hoodie1.jpg', category: 'Hooded T-Shirts', theme: 'DC Comics', sizes: ['L', 'XL', 'XXL'] },
    { id: 4, name: 'Graphic T-Shirt', price: '$20', imageUrl: '/images/mens/tshirt2.jpg', category: 'T-Shirts', theme: 'Kung Fu Panda', sizes: ['S', 'M', 'L', 'XL'] },
    { id: 5, name: 'Sweatshirt', price: '$40', imageUrl: '/images/mens/sweatshirt1.jpg', category: 'T-Shirts', theme: 'Garfield', sizes: ['M', 'L'] },
    { id: 6, name: 'Bomber Jacket', price: '$60', imageUrl: '/images/mens/jacket1.jpg', category: 'Jackets', theme: 'Looney Tunes', sizes: ['M', 'L', 'XL'] },
    { id: 7, name: 'Denim Jacket', price: '$55', imageUrl: '/images/mens/jacket2.jpg', category: 'Jackets', theme: 'Donald Duck', sizes: ['S', 'M', 'L'] },
    { id: 8, name: 'Casual T-Shirt', price: '$22', imageUrl: '/images/mens/tshirt3.jpg', category: 'T-Shirts', theme: 'Brooklyn Nine-Nine', sizes: ['M', 'XL'] },
    { id: 9, name: 'Sports T-Shirt', price: '$30', imageUrl: '/images/mens/tshirt4.jpg', category: 'T-Shirts', theme: 'Harry Potter', sizes: ['S', 'M', 'L', 'XXL'] },
    { id: 10, name: 'Relaxed Fit T-Shirt', price: '$28', imageUrl: '/images/mens/tshirt5.jpg', category: 'Men Relaxed Fit T-Shirts', theme: 'Breaking Bad', sizes: ['XXS', 'XS', 'S', 'M'] },
];


const categories = [
    'Hooded T-Shirts',
    'Men Relaxed Fit T-Shirts',
    'Oversized T-Shirts',
    'Supima T-Shirts',
    'T-Shirts',
];

const themes = [
    'Breaking Bad',
    'Brooklyn Nine-Nine',
    'DC Comics',
    'Donald Duck',
    'Garfield',
    'Harry Potter',
    'Kung Fu Panda',
    'Looney Tunes',
];

const sizes = [
    'XXS', 'XS', 'S', 'M', 'L', 'XL', 'XXL', 'XXXL',
];

const priceRanges = [
    'Rs. 599 to Rs. 898',
    'Rs. 899 to Rs. 1198',
    'Rs. 1199 to Rs. 1499',
];

const Men: React.FC = () => {
    const [filteredProducts, setFilteredProducts] = useState<Product[]>(products);
    const [activeFilters, setActiveFilters] = useState({
        categories: [] as string[],
        themes: [] as string[],
        sizes: [] as string[],
    });

    useEffect(() => {
        const applyFilters = () => {
            let filtered = products;

            if (activeFilters.categories.length > 0) {
                filtered = filtered.filter(product =>
                    activeFilters.categories.includes(product.category)
                );
            }

            if (activeFilters.themes.length > 0) {
                filtered = filtered.filter(product =>
                    activeFilters.themes.includes(product.theme)
                );
            }

            if (activeFilters.sizes.length > 0) {
                filtered = filtered.filter(product =>
                    product.sizes.some(size => activeFilters.sizes.includes(size))
                );
            }

            setFilteredProducts(filtered);
        };

        applyFilters();
    }, [activeFilters]);

    const handleFilterChange = (filterType: 'categories' | 'themes' | 'sizes', value: string) => {
        setActiveFilters(prevFilters => {
            const filterValues = prevFilters[filterType];
            const newFilterValues = filterValues.includes(value)
                ? filterValues.filter(v => v !== value)
                : [...filterValues, value];

            return { ...prevFilters, [filterType]: newFilterValues };
        });
    };

    return (
        <div>
            <NavBar />
            <main className={styles.main}>
                <div className={styles.layout}>
                    <aside className={styles.sidebar}>
                        <FilterSidebar
                            categories={categories}
                            themes={themes}
                            sizes={sizes}
                            onFilterChange={handleFilterChange}
                        />
                    </aside>
                    <section className={styles.content}>
                        <h1 className={styles.title}>Mens Collection</h1>
                        <div className={styles.grid}>
                            {filteredProducts.map(product => (
                                <ProductCard key={product.id} product={product} />
                            ))}
                        </div>
                    </section>
                </div>
            </main>
        </div>
    );
};


export default Men;
