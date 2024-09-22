import CartItem from "@/components/CartItem";
import CartSummary from '../components/CartSummary';
import styles from '../styles/Cart.module.scss';
import {useDispatch, useSelector} from "react-redux";
import {removeFromCart, changeItemQuantity} from "@/store/slices/cartSlice";
import {RootState} from "@/store/store";

const Cart: React.FC = () => {
    const cartItems = useSelector((state: RootState) => state.cart.items);
    const dispatch = useDispatch();

    // Calculate the total price dynamically based on item quantities
    const cartTotal = cartItems.reduce((total, item) => total + item.price * item.qty, 0);
    const gst = cartTotal * 0.12; //  12% GST
    const totalAmount = cartTotal + gst;

    const handleRemoveItem = (id: number) => {
        dispatch(removeFromCart(id));
    };

    const handleQuantityChange = (id: number, qty: number) => {
        if (qty > 0) {
            dispatch(changeItemQuantity({ id, qty }));
        }
    };

    const handleMoveToWishlist = (index: number) => {
        // Move to wishlist logic
    };

    return (
        <div className={styles.cart}>
            <div className={styles.cartItems}>
                {cartItems.map((item, index) => (
                    <CartItem
                        key={item.id}
                        id={item.id}
                        name={item.name}
                        price={item.price}
                        size={item.size}
                        qty={item.qty}
                        imageUrl={item.imageUrl}
                        description={item.description}
                        onIncreaseQty={() => handleQuantityChange(item.id, item.qty + 1)}
                        onDecreaseQty={() => handleQuantityChange(item.id, item.qty - 1)}
                        onRemove={() => handleRemoveItem(item.id)}
                        onMoveToWishlist={() => handleMoveToWishlist(index)}
                    />
                ))}
            </div>
            <CartSummary cartTotal={cartTotal} gst={gst} totalAmount={totalAmount} />
        </div>
    );
};

export default Cart;
