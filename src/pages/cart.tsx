import CartItem from "@/components/CartItem";
import CartSummary from '../components/CartSummary';
import styles from '../styles/Cart.module.scss';
import {useDispatch, useSelector} from "react-redux";
import {removeFromCart} from "@/store/slices/cartSlice";
import {RootState} from "@/store/store";

const Cart: React.FC = () => {

    const cartTotal = 1338.39;
    const gst = 160.61;
    const totalAmount = 1499;

    const cartItems = useSelector((state: RootState) => state.cart.items);

    // const cartItems = [1]

    const dispatch = useDispatch();

    const handleRemoveItem = (id: number) => {
        dispatch(removeFromCart(id));
    };

    const handleMoveToWishlist = (index: number) => {
        // Move to wishlist logic
    };


    return (
        <div className={styles.cart}>
            <div className={styles.cartItems}>
                {cartItems.map((item, index) => (
                    <CartItem
                        id={item.id}
                        name={item.name}
                        price={item.price}
                        size={item.size}
                        qty={item.qty}
                        imageUrl={item.imageUrl}
                        description={item.description}
                        onIncreaseQty={()=>{}}
                        onDecreaseQty={()=>{}}
                        onRemove={() => handleRemoveItem(index)}
                        onMoveToWishlist={() => handleMoveToWishlist(index)}
                    />
                ))}
            </div>
            <CartSummary cartTotal={cartTotal} gst={gst} totalAmount={totalAmount} />
        </div>
    );
};

export default Cart;
