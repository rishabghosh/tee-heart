// pages/men.tsx
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
    { id: 1, name: 'Classic T-Shirt', price: '$25', imageUrl: '/images/mens/tshirt1.jpg' },
    { id: 2, name: 'Polo Shirt', price: '$35', imageUrl: '/images/mens/polo1.jpg' },
    { id: 3, name: 'Hoodie', price: '$45', imageUrl: '/images/mens/hoodie1.jpg' },
    // Add more products as needed
];

const Men: React.FC = () => {
    return (
        <div>
            <NavBar />
            <main className={styles.main}>
                <div className={styles.layout}>
                    <aside className={styles.sidebar}>
                        <FilterSidebar />
                    </aside>
                    <section className={styles.content}>
                        <h1 className={styles.title}>Men's Collection</h1>
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

export default Men;
