// pages/women.tsx
import React from 'react';
import NavBar from '../components/NavBar';
import ProductCard from '../components/ProductCard';
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
    // Add more products as needed
];

const Women: React.FC = () => {
    return (
        <div>
            <NavBar />
            <main className={styles.main}>
                <h1 className={styles.title}>Women's Collection</h1>
                <div className={styles.grid}>
                    {products.map(product => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </main>
        </div>
    );
};

export default Women;
