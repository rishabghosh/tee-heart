import React, { useState, useEffect } from 'react';
import ProductCard from '../components/ProductCard';
import FilterSidebar from '../components/FilterSidebar';
import MobileFilter from '../components/MobileFilter'; // New MobileFilter component
import styles from '../styles/Category.module.scss';
import { ProductExtended } from '@/models/ProductExtended';

interface CustomerCategoryProps {
    title: string;
    products: ProductExtended[];
}

const CustomerCategory: React.FC<CustomerCategoryProps> = ({ title, products }) => {
    const [filteredProducts, setFilteredProducts] = useState<ProductExtended[]>(products);
    const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false); // State to track if the screen is mobile

    const handleFilteredProducts = (filtered: ProductExtended[]) => {
        setFilteredProducts(filtered);
    };

    const openMobileFilter = () => {
        setIsMobileFilterOpen(true);
    };

    const closeMobileFilter = () => {
        setIsMobileFilterOpen(false);
    };

    // Use useEffect to track window resize and update isMobile state
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768); // Mobile resolution is considered below or equal to 768px
        };

        // Check initial screen size
        handleResize();

        // Attach resize event listener
        window.addEventListener('resize', handleResize);

        // Cleanup event listener on unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div>
            <main className={styles.main}>
                <div className={styles.layout}>
                    {/* Conditionally render the FilterSidebar only on non-mobile screens */}
                    {!isMobile && (
                        <aside className={styles.sidebar}>
                            <FilterSidebar
                                products={products}
                                onFilter={handleFilteredProducts}
                            />
                        </aside>
                    )}

                    <section className={styles.content}>
                        <h1 className={styles.title}>{title}</h1>
                        <div className={styles.grid}>
                            {filteredProducts.map(product => (
                                <ProductCard key={product.id} product={product} />
                            ))}
                        </div>
                    </section>
                </div>
            </main>

            {/* Render MobileFilter component when mobile filter is open */}
            {isMobileFilterOpen && (
                <MobileFilter
                    products={products}
                    onClose={closeMobileFilter}
                    onFilter={handleFilteredProducts}
                />
            )}

            {/* Mobile Filter button visible only on mobile */}
            {isMobile && (
                <button
                    className={styles.mobileFilterButton}
                    onClick={openMobileFilter}
                >
                    Filter
                </button>
            )}
        </div>
    );
};

export default CustomerCategory;
