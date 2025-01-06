import styles from '@/styles/allInOnePurchaseDetails.module.scss';

interface ButtonsSectionProps {
    handleAddToCart: () => void;
    wishlistDisabled: boolean;
}

const ButtonsSection: React.FC<ButtonsSectionProps> = ({ handleAddToCart, wishlistDisabled }) => (
    <div className={styles.buttonsSection}>
        <button className={styles.addToCartButton} onClick={handleAddToCart}>Add to Cart</button>
        <button className={styles.addToWishlistButton} disabled={wishlistDisabled}>Add to Wishlist</button>
    </div>
);

export default ButtonsSection;
