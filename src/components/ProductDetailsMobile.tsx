import Image from "next/image";
import styles from "@/styles/ProductDetailsMobile.module.scss";

const ProductDetailsMobile = () => {
    return (
        <div className={styles.productDetailsMobile}>
            {/* Navigation Bar */}
            {/*<header className={styles.navBar}>*/}
            {/*    <button className={styles.backButton}>&#8592;</button>*/}
            {/*    <h1 className={styles.logo}>Caprese</h1>*/}
            {/*    <div className={styles.navIcons}>*/}
            {/*        <button>&#128269;</button>*/}
            {/*        <button>&#9825;</button>*/}
            {/*        <button>&#128722;</button>*/}
            {/*    </div>*/}
            {/*</header>*/}

            {/* Product Image */}
            <main className={styles.mainContent}>
                <div className={styles.productImage}>
                    <Image
                        src="/product-image.jpg" // Replace with your image path
                        alt="Product Image"
                        width={300}
                        height={300}
                        className={styles.image}
                    />
                </div>

                {/* Product Details */}
                <div className={styles.details}>
                    <h2>Caprese Women Textured Purse Clutch</h2>
                    <p className={styles.price}>
                        ₹1019{" "}
                        <span className={styles.mrp}>₹3398</span>{" "}
                        <span className={styles.discount}>(70% OFF)</span>
                    </p>
                </div>

                {/* Delivery & Services */}
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
                    <ul>
                        <li>Pay on delivery might be available</li>
                        <li>Easy 14 days returns</li>
                        <li>This item is only returnable and not exchangeable</li>
                    </ul>
                </div>
            </main>

            {/* Action Buttons */}
            <footer className={styles.actionButtons}>
                <button className={styles.wishlistButton}>Wishlist</button>
                <button className={styles.addToBagButton}>Add to Bag</button>
            </footer>
        </div>
    );
};

export default ProductDetailsMobile;
