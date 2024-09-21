import styles from '../styles/CartSummary.module.scss';

interface CartSummaryProps {
    cartTotal: number;
    gst: number;
    totalAmount: number;
}

const CartSummary: React.FC<CartSummaryProps> = ({ cartTotal, gst, totalAmount }) => {
    return (
        <div className={styles.summary}>
            <h3>Billing Details</h3>
            <div className={styles.detail}>
                <p>Cart Total (Excl. of all taxes)</p>
                <p>₹ {cartTotal}</p>
            </div>
            <div className={styles.detail}>
                <p>GST</p>
                <p>₹ {gst}</p>
            </div>
            <div className={styles.detail}>
                <p>Shipping Charges</p>
                <p>₹ 0</p>
            </div>
            <div className={styles.totalAmount}>
                <p>Total Amount</p>
                <p>₹ {totalAmount}</p>
            </div>
            <button className={styles.placeOrderBtn}>Place Order</button>
        </div>
    );
};

export default CartSummary;

