import styles from '@/styles/ProductDetails.module.scss';

interface SizeSelectorProps {
    sizes: string[];
    selectedSize: string | null;
    onSelectSize: (size: string) => void;
}

const SizeSelector: React.FC<SizeSelectorProps> = ({ sizes, selectedSize, onSelectSize }) => (
    <div className={styles.sizeSelector}>
        <h4>Select Size:</h4>
        <div className={styles.sizeButtons}>
            {sizes.map((size) => (
                <button
                    key={size}
                    className={`${styles.sizeButton} ${selectedSize === size ? styles.selectedSize : ''}`}
                    onClick={() => onSelectSize(size)}
                >
                    {size}
                </button>
            ))}
        </div>
    </div>
);

export default SizeSelector;
