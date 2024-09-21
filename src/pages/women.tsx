// pages/women.tsx
import React from 'react';
import NavBar from '../components/NavBar';
import ProductCard from '../components/ProductCard';
import FilterSidebar from '../components/FilterSidebar';
import styles from '../styles/Category.module.scss';
import {Product} from "@/models/Product";

const products: Product[] = [
    { id: 1, name: 'Floral Dress', price: '$30', imageUrl: '/images/womens/dress1.jpg', category: 'Skater Dresses', theme: 'Marvel', sizes: ['S', 'M', 'L'] },
    { id: 2, name: 'Crop Top', price: '$20', imageUrl: '/images/womens/croptop1.jpg', category: 'Cropped Shirts', theme: 'Ed Sheeran', sizes: ['XS', 'S', 'M'] },
    { id: 3, name: 'Denim Jacket', price: '$50', imageUrl: '/images/womens/jacket1.jpg', category: 'Jackets', theme: 'Marvel', sizes: ['M', 'L', 'XL'] },
    { id: 4, name: 'Maxi Dress', price: '$60', imageUrl: '/images/womens/dress2.jpg', category: 'Polo Dresses', theme: 'Ed Sheeran', sizes: ['S', 'M', 'L'] },
    { id: 5, name: 'Tunic Top', price: '$25', imageUrl: '/images/womens/tunic1.jpg', category: 'Boyfriend T-Shirts', theme: 'Marvel', sizes: ['XS', 'S', 'M', 'L'] },
    { id: 6, name: 'High-Waist Jeans', price: '$45', imageUrl: '/images/womens/jeans1.jpg', category: 'Full Length Co-ord Sets', theme: 'Ed Sheeran', sizes: ['S', 'M', 'L', 'XL'] },
    { id: 7, name: 'Sweater Dress', price: '$40', imageUrl: '/images/womens/dress3.jpg', category: 'Long Slit Shirt Dresses', theme: 'Marvel', sizes: ['XS', 'S', 'M'] },
    { id: 8, name: 'Peplum Top', price: '$22', imageUrl: '/images/womens/top1.jpg', category: 'Cropped Tank Tops', theme: 'Marvel', sizes: ['S', 'M', 'L'] },
    { id: 9, name: 'Mini Dress', price: '$35', imageUrl: '/images/womens/dress4.jpg', category: 'Skater Dresses', theme: 'Ed Sheeran', sizes: ['XS', 'S', 'M', 'L'] },
    { id: 10, name: 'Leather Jacket', price: '$80', imageUrl: '/images/womens/jacket2.jpg', category: 'Jackets', theme: 'Marvel', sizes: ['M', 'L', 'XL'] },
];



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
