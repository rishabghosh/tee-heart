import React, { useState, useEffect } from 'react';
import NavBar from '../components/NavBar';
import ProductCard from '../components/ProductCard';
import FilterSidebar from '../components/FilterSidebar';
import styles from '../styles/Category.module.scss';
import mensProducts from '../data/menProducts.mock.json';
import { Product } from "@/models/Product";

// Use the imported JSON data directly
const products: Product[] = mensProducts;

const categories = Array.from(new Set(products.map(product => product.category)));
const themes = Array.from(new Set(products.map(product => product.theme)));
const sizes = Array.from(new Set(products.flatMap(product => product.sizes)));


// Define your price ranges if needed

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
                        <h1 className={styles.title}>Men's Collection</h1>
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
