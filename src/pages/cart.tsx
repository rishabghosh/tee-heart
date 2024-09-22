import CartItem from "@/components/CartItem";
import CartSummary from '../components/CartSummary';
import styles from '../styles/Cart.module.scss';
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart, changeItemQuantity } from "@/store/slices/cartSlice";
import { RootState } from "@/store/store";

const Cart: React.FC = () => {
    const cart = useSelector((state: RootState) => state.cart.cart);
    const dispatch = useDispatch();

    // Get total price and GST
    const cartTotal = cart.getTotalPrice();
    const gst = cartTotal * 0.12;
    const totalAmount = cartTotal + gst;

    const handleRemoveItem = (id: number, size: string) => {
        dispatch(removeFromCart({ id, size }));
    };

    const handleQuantityChange = (id: number, size: string, qty: number) => {
        if (qty > 0) {
            dispatch(changeItemQuantity({ id, size, qty }));
        }
    };

    return (
        <div className={styles.cart}>
            <div className={styles.cartItems}>
                {cart.getItems().map((item, index) => (
                    <CartItem
                        key={`${item.id}-${item.size}`}
                        id={item.id}
                        name={item.name}
                        price={item.price}
                        size={item.size}
                        qty={item.qty}
                        imageUrl={item.imageUrl}
                        description={item.description}
                        onIncreaseQty={() => handleQuantityChange(item.id, item.size, item.qty + 1)}
                        onDecreaseQty={() => handleQuantityChange(item.id, item.size, item.qty - 1)}
                        onRemove={() => handleRemoveItem(item.id, item.size)}
                    />
                ))}
            </div>
            <CartSummary cartTotal={cartTotal} gst={gst} totalAmount={totalAmount} />
        </div>
    );
};

export default Cart;
