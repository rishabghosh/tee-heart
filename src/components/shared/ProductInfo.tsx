import styles from '@/styles/ProductDetails.module.scss';
import React from "react";
import PriceDisplay from "@/components/shared/PriceDisplay";

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
                <PriceDisplay price={price} sellingPrice={sellingPrice}/>
            </div>
            <p className={styles.priceInfo}>Inclusive of all taxes</p>
    </div>
);

export default ProductInfo;
