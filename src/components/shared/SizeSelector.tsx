import styles from '@/styles/allInOnePurchaseDetails.module.scss';
import React from "react";

interface SizeSelectorProps {
    sizes: string[];
    selectedSize: string | null;
    onSelectSize: (size: string) => void;
}

const SizeSelector: React.FC<SizeSelectorProps> = ({ sizes, selectedSize, onSelectSize }) => {

    return (
        <div className={styles.sizeSelector}>
            <h4>Select Size:</h4>
            <div className={styles.sizeOptions}>
                {sizes.map(size => (
                    <button
                        key={size}
                        className={`${styles.sizeButton} ${selectedSize === size ? styles.active : ''}`}
                        onClick={() => onSelectSize(size)}
                    >
                        {size}
                    </button>
                ))}
            </div>
        </div>
    );
}

export default SizeSelector;