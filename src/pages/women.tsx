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
    ]


const categories = [
    'Boyfriend T-Shirts',
    'Cropped Shirts',
    'Cropped Tank Tops',
    'Freestyle Leggings',
    'Full Length Co-ord Sets',
    'Long Slit Shirt Dresses',
    'Mini Bags',
    'Polo Dresses',
    'Skater Dresses',
    'Supima Women Dolman Sleeve T-Shirts',
];

const themes = [
    'Ed Sheeran',
    'Marvel',
];

const sizes = [
    'XXS', 'XS', 'S', 'M', 'L', 'XL', 'XXL', 'XXXL',
];

const priceRanges = [
    'Rs. 349 to Rs. 706',
    'Rs. 707 to Rs. 1064',
    'Rs. 1065 to Rs. 1422',
    'Rs. 1423 to Rs. 1780',
    'Rs. 1781 to Rs. 2138',
    'Rs. 2139 to Rs. 2499',
];

const Women: React.FC = () => {
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
                            priceRanges={priceRanges}
                        />
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
