import styles from '../styles/CartItem.module.scss';

interface CartItemProps {
    name: string;
    price: number;
    size: string;
    qty: number;
    imageUrl: string;
    onRemove: () => void;
    onMoveToWishlist: () => void;
}

const CartItem: React.FC<CartItemProps> = ({ name, price, size, qty, imageUrl, onRemove, onMoveToWishlist }) => {
    return (
        <div className={styles.cartItem}>
            <img src={imageUrl} alt={name} className={styles.itemImage} />
            <div className={styles.itemDetails}>
                <h4>{name}</h4>
                <p>Size: {size}</p>
                <p>Qty: {qty}</p>
                <p>₹ {price}</p>
            </div>
            <div className={styles.actions}>
                <button onClick={onRemove}>Remove</button>
                <button onClick={onMoveToWishlist}>Move to Wishlist</button>
            </div>
        </div>
    );
};

export default CartItem;
