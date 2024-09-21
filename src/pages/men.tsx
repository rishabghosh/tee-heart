import React, { useState } from 'react';
import NavBar from '../components/NavBar';
import ProductCard from '../components/ProductCard';
import FilterSidebar from '../components/FilterSidebar';
import styles from '../styles/Category.module.scss';
import mensProducts from '../data/menProducts.mock.json';
import { Product } from "@/models/Product";

const products: Product[] = mensProducts;

const Men: React.FC = () => {
    const [filteredProducts, setFilteredProducts] = useState<Product[]>(products);

    const handleFilteredProducts = (filtered: Product[]) => {
        setFilteredProducts(filtered);
    };

    return (
        <div>
            <NavBar />
            <main className={styles.main}>
                <div className={styles.layout}>
                    <aside className={styles.sidebar}>
                        <FilterSidebar
                            products={products}
                            onFilter={handleFilteredProducts}
                        />
                    </aside>
                    <section className={styles.content}>
                        <h1 className={styles.title}>Men&apos;s Collection</h1>
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
