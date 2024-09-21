// pages/kids.tsx
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
    { id: 1, name: 'Kids T-Shirt', price: '$15', imageUrl: '/images/kids/tshirt1.jpg' },
    { id: 2, name: 'Kids Hoodie', price: '$25', imageUrl: '/images/kids/hoodie1.jpg' },
    { id: 3, name: 'Kids Shorts', price: '$20', imageUrl: '/images/kids/shorts1.jpg' },
    // Add more products as needed
];

const Kids: React.FC = () => {
    return (
        <div>
            <NavBar />
            <main className={styles.main}>
                <h1 className={styles.title}>Kids' Collection</h1>
                <div className={styles.grid}>
                    {products.map(product => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </main>
        </div>
    );
};

export default Kids;
