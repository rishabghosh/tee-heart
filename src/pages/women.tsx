// pages/women.tsx
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
    { id: 1, name: 'Floral Dress', price: '$30', imageUrl: '/images/womens/dress1.jpg' },
    { id: 2, name: 'Crop Top', price: '$20', imageUrl: '/images/womens/croptop1.jpg' },
    { id: 3, name: 'Denim Jacket', price: '$50', imageUrl: '/images/womens/jacket1.jpg' },
];

const filterOptions = ['Size', 'Color', 'Price'];

const Women: React.FC = () => {
    return (
        <div>
            <NavBar />
            <main className={styles.main}>
                <div className={styles.layout}>
                    <aside className={styles.sidebar}>
                        <FilterSidebar options={filterOptions} />
                    </aside>
                    <section className={styles.content}>
                        <h1 className={styles.title}>Women's Collection</h1>
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

export default Women;
