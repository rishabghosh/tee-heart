import Image from "next/image";
import styles from "@/styles/ProductDetailsMobile.module.scss";



const ProductDetailsMobile = ({
                                  imageUrls,
                                  name,
                                  price,
                                  category,
                                  sellingPrice,
                                  sizes,
                                  selectedSize,
                                  onSelectSize,
                                  handleAddToCart,
                                  wishlistDisabled,
                                  product
                              }) => (
    <div className={styles.productDetailsMobile}>
        <main className={styles.mainContent}>
            <div className={styles.productImage}>
                <Image
                    src={imageUrls[0]}
                    alt="Product Image"
                    width={300}
                    height={300}
                    className={styles.image}
                />
            </div>
            <div className={styles.details}>
                <h2>{name}</h2>
                <span>{category}</span>
                <p className={styles.price}>
                    <span>₹&thinsp;{sellingPrice}</span>
                    {/*<span className={styles.mrp}>₹3398</span>{" "}*/}
                    {/*<span className={styles.discount}>(70% OFF)</span>*/}
                </p>
            </div>

            <div className={styles.deliveryInfo}>
                <h3>Check Delivery & Services</h3>
                <div className={styles.pinChecker}>
                    <input
                        type="text"
                        placeholder="Enter a PIN code"
                        className={styles.pinInput}
                    />
                    <button className={styles.checkButton}>Check</button>
                </div>
            </div>
        </main>

        <footer className={styles.actionButtons}>
            <button className={styles.wishlistButton} disabled={wishlistDisabled}>Wishlist</button>
            <button className={styles.addToBagButton} onClick={handleAddToCart}>Add to Bag</button>
        </footer>
    </div>
);

export default ProductDetailsMobile;
