import styles from '../styles/CartItem.module.scss';
import {CartItemProps} from "@/models/CartItemProps";


const CartItem: React.FC<CartItemProps> = ({ name, price, size, qty, description, imageUrl, onRemove, onMoveToWishlist, onIncreaseQty, onDecreaseQty }) => {
    return (
        <div className={styles.cartItem}>
            <img src={imageUrl} alt={name} className={styles.itemImage} />
            <div className={styles.itemDetails}>
                <h4>{name}</h4>
                <p>{description}</p>
                <p>Size: {size}</p>
                <div className={styles.qtyControl}>
                    <button onClick={onDecreaseQty} className={styles.qtyBtn}>-</button>
                    <p>{qty}</p>
                    <button onClick={onIncreaseQty} className={styles.qtyBtn}>+</button>
                </div>
                <p>₹ {price}</p>
            </div>
            <div className={styles.actions}>
                <button onClick={onRemove} className={styles.actionBtn}>Remove</button>
                <button onClick={onMoveToWishlist} className={styles.actionBtn}>Move to Wishlist</button>
            </div>
        </div>
    );
};

export default CartItem;
