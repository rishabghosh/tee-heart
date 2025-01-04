import styles from '@/styles/ProductDetails.module.scss';
import React from "react";
import {calculateDiscountPercentage} from "@/utils/calculators";

interface ProductInfoProps {
    name: string;
    price: number;
    category: string;
    sellingPrice: number;
}

const ProductInfo: React.FC<ProductInfoProps> = ({name, price, category, sellingPrice}) => (
    <div>
        <h1 className={styles.productTitle}>{name}</h1>
        <p className={styles.productSubtitle}>{category}</p>
            <div className={styles.productPrice}>
                {price !== sellingPrice ? (
                    <>
                        <p className={styles.currentPrice}>
                            ₹&thinsp;{sellingPrice}&nbsp;&nbsp;
                            <span className={styles.originalPrice}>₹&thinsp;{price}</span>
                            <span
                                className={styles.discount}>&nbsp;&nbsp;({calculateDiscountPercentage(price, sellingPrice)}% OFF)</span>
                        </p>
                    </>
                ) : (
                    <p className={styles.price}>₹ {price}</p>
                )}
            </div>
            <p className={styles.priceInfo}>Inclusive of all taxes</p>
    </div>
);

export default ProductInfo;
