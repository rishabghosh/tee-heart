import styles from '../styles/CartItem.module.scss';
import { CartItemProps } from "@/models/CartItemProps";
import Image from "next/image";
import { addDomain } from "@/utils/envUrls";

const CartItem: React.FC<CartItemProps> = ({
                                               name,
                                               price,
                                               size,
                                               qty,
                                               description,
                                               imageUrl,
                                               onRemove,
                                               onMoveToWishlist,
                                               onIncreaseQty,
                                               onDecreaseQty,
                                           }) => {
    const totalPrice = price * qty; // Calculate total price for the current item based on its quantity

    return (
        <div className={styles.cartItem}>
            {/* Layer 1: Image and Product Details */}
            <div className={styles.productDetailsContainer}>
                <Image
                    src={addDomain(imageUrl)}
                    alt={name}
                    width={500}
                    height={500}
                    className={styles.itemImage}
                />
                <div className={styles.itemDetails}>
                    <h4>{name}</h4>
                    <p>{description}</p>
                    <p>Size: {size}</p>
                    <div className={styles.qtyControl}>
                        <button onClick={onDecreaseQty} className={styles.qtyBtn}>-</button>
                        <p>{qty}</p>
                        <button onClick={onIncreaseQty} className={styles.qtyBtn}>+</button>
                    </div>
                    <p>₹ {totalPrice.toFixed(2)}</p>
                </div>
            </div>

            {/* Layer 2: Action Buttons */}
            <div className={styles.actions}>
                <button onClick={onRemove} className={styles.actionBtn}>Remove</button>
                <button onClick={onMoveToWishlist} className={styles.actionBtn}>Move to Wishlist</button>
            </div>
        </div>
    );
};

export default CartItem;
