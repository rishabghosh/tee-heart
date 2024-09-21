import CartItem from './CartItem';
import CartSummary from './CartSummary';
import styles from '../styles/Cart.module.scss';

const Cart: React.FC = () => {
    const cartItems = [
        {
            name: "Spider-Man: Midnight",
            price: 1499,
            size: "XS",
            qty: 1,
            imageUrl: "/path-to-image/spiderman-tshirt.png",
        },
        // Add more items if needed
    ];

    const cartTotal = 1338.39;
    const gst = 160.61;
    const totalAmount = 1499;

    const handleRemoveItem = (index: number) => {
        // Remove item logic
    };

    const handleMoveToWishlist = (index: number) => {
        // Move to wishlist logic
    };

    return (
        <div className={styles.cart}>
            <div className={styles.cartItems}>
                {cartItems.map((item, index) => (
                    <CartItem
                        key={index}
                        name={item.name}
                        price={item.price}
                        size={item.size}
                        qty={item.qty}
                        imageUrl={item.imageUrl}
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
