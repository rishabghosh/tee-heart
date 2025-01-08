// PriceDisplay Component
import React from "react";
import styles from '@/styles/PriceDisplay.module.scss';
import {calculateDiscountPercentage} from "@/utils/calculators";

interface PriceDisplayProps {
    price: number;
    sellingPrice: number;
}

const PriceDisplay: React.FC<PriceDisplayProps> = ({ price, sellingPrice }) => {
    return (
        <div className={styles.productPrice}>
            {price !== sellingPrice ? (
                <>
                    <p className={styles.currentPrice}>
                        <span>₹&thinsp;{sellingPrice}&nbsp;&nbsp;</span>
                        <span className={styles.originalPrice}>₹&thinsp;{price}</span>
                        <span
                            className={styles.discount}>&nbsp;&nbsp;({calculateDiscountPercentage(price, sellingPrice)}% OFF)</span>
                    </p>
                </>
            ) : (
                <p className={styles.currentPrice}>₹&thinsp;{price}</p>
            )}
        </div>
    );
};

export default PriceDisplay;
