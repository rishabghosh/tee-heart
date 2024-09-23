import styles from '@/styles/ProductDetails.module.scss';

interface QuantitySelectorProps {
    quantity: number;
    setQuantity: React.Dispatch<React.SetStateAction<number>>;
}

const QuantitySelector: React.FC<QuantitySelectorProps> = ({ quantity, setQuantity }) => (
    <div className={styles.quantitySection}>
        <h4>Quantity:</h4>
        <button className={styles.quantityButton} onClick={() => setQuantity((prev) => Math.max(prev - 1, 1))}>
            -
        </button>
        <span className={styles.quantityValue}>{quantity}</span>
        <button className={styles.quantityButton} onClick={() => setQuantity((prev) => prev + 1)}>
            +
        </button>
    </div>
);

export default QuantitySelector;
