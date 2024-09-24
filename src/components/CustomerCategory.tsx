import React, { useState } from 'react';
import ProductCard from '../components/ProductCard';
import FilterSidebar from '../components/FilterSidebar';
import MobileFilter from '@/components/MobileFilter'; // New MobileFilter component
import styles from '../styles/Category.module.scss';
import { ProductExtended } from '@/models/ProductExtended';

interface CustomerCategoryProps {
    title: string;
    products: ProductExtended[];
}

const CustomerCategory: React.FC<CustomerCategoryProps> = ({ title, products }) => {
    const [filteredProducts, setFilteredProducts] = useState<ProductExtended[]>(products);
    const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

    const handleFilteredProducts = (filtered: ProductExtended[]) => {
        setFilteredProducts(filtered);
    };

    const openMobileFilter = () => {
        setIsMobileFilterOpen(true);
    };

    const closeMobileFilter = () => {
        setIsMobileFilterOpen(false);
    };

    return (
        <div>
            <main className={styles.main}>
                <div className={styles.layout}>
                    {/* Filter button for mobile */}
                    <button className={styles.mobileFilterButton} onClick={openMobileFilter}>
                        Filter
                    </button>

                    <aside className={styles.sidebar}>
                        <FilterSidebar
                            products={products}
                            onFilter={handleFilteredProducts}
                        />
                    </aside>

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
        </div>
    );
};

export default CustomerCategory;
