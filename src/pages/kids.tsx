// pages/kids.tsx
import React from 'react';
import NavBar from '../components/NavBar';
import ProductCard from '../components/ProductCard';
import FilterSidebar from '../components/FilterSidebar';
import styles from '../styles/Category.module.scss';

interface Product {
    id: number;
    name: string;
    price: string;
    imageUrl: string;
}

const products: Product[] = [
    { id: 1, name: 'Kids T-Shirt', price: '$15', imageUrl: '/images/kids/tshirt1.jpg' },
    { id: 2, name: 'Kids Hoodie', price: '$25', imageUrl: '/images/kids/hoodie1.jpg' },
    { id: 3, name: 'Kids Shorts', price: '$20', imageUrl: '/images/kids/shorts1.jpg' },
];

const filterOptions = ['Age Group', 'Size', 'Color'];

const Kids: React.FC = () => {
    return (
        <div>
            <NavBar />
            <main className={styles.main}>
                <div className={styles.layout}>
                    <aside className={styles.sidebar}>
                        <FilterSidebar options={filterOptions} />
                    </aside>
                    <section className={styles.content}>
                        <h1 className={styles.title}>Kids' Collection</h1>
                        <div className={styles.grid}>
                            {products.map(product => (
                                <ProductCard key={product.id} product={product} />
                            ))}
                        </div>
                    </section>
                </div>
            </main>
        </div>
    );
};

export default Kids;
