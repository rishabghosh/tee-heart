// pages/product/[id].tsx
import { useRouter } from 'next/router';
import React from 'react';
import NavBar from '../../components/NavBar';
import styles from '../../styles/ProductDetail.module.scss';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../store/slices/cartSlice';

interface Product {
    id: number;
    name: string;
    price: string;
    imageUrl: string;
    description: string;
}

// Sample product data
const products: Product[] = [
    {
        id: 1,
        name: 'Classic T-Shirt',
        price: '$25',
        imageUrl: '/images/mens/tshirt1.jpg',
        description: 'A comfortable and stylish classic t-shirt.',
    },
    // Add more products
];

const ProductDetail: React.FC = () => {
    const router = useRouter();
    const { id } = router.query;
    const dispatch = useDispatch();

    const product = products.find(p => p.id === Number(id));

    if (!product) {
        return <div>Product not found.</div>;
    }

    const handleAddToCart = () => {
        dispatch(addToCart(product));
    };

    return (
        <div>
            <NavBar />
            <main className={styles.main}>
                <div className={styles.container}>
                    <img src={product.imageUrl} alt={product.name} className={styles.image} />
                    <div className={styles.details}>
                        <h1 className={styles.name}>{product.name}</h1>
                        <p className={styles.price}>{product.price}</p>
                        <p className={styles.description}>{product.description}</p>
                        <button className={styles.button} onClick={handleAddToCart}>
                            Add to Cart
                        </button>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default ProductDetail;
