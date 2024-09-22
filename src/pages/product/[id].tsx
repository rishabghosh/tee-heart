import { GetStaticPaths, GetStaticProps } from 'next';
import Image from 'next/image';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '@/store/slices/cartSlice';
import styles from '@/styles/ProductDetails.module.scss';
import productsData from '@/data/products.json';
import {ProductExtended} from "@/models/ProductExtended";
import {convertToCartProduct} from "@/utils/CartItemPropConverter";

interface ProductDetailsProps {
    product: ProductExtended;
}

const ProductDetails: React.FC<ProductDetailsProps> = ({ product }) => {
    const dispatch = useDispatch();
    const [selectedSize, setSelectedSize] = useState<string | null>(null);
    const [quantity, setQuantity] = useState(1);
    const [pincode, setPincode] = useState('');
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [wishlistDisabled, setWishlistDisabled] = useState(true);

    const handleAddToCart = () => {
        if (selectedSize) {
            const cartProduct = convertToCartProduct(product, selectedSize, quantity);
            dispatch(addToCart(cartProduct));
        } else {
            alert('Please select a size');
        }
    };


    const handleSizeClick = (size: string) => {
        setSelectedSize(size);
    };

    const handleQuantityChange = (operation: string) => {
        if (operation === 'increment') {
            setQuantity((prev) => prev + 1);
        } else if (operation === 'decrement' && quantity > 1) {
            setQuantity((prev) => prev - 1);
        }
    };

    const handlePincodeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPincode(e.target.value);
    };

    return (
        <div className={styles.productPage}>
            <div className={styles.imageSection}>
                <Image
                    src={product.imageUrl}
                    alt={product.name}
                    width={500}
                    height={500}
                    className={styles.productImage}
                />
            </div>
            <div className={styles.detailsSection}>
                <h1 className={styles.productTitle}>{product.name}</h1>
                <p className={styles.productPrice}>${product.price}</p>
                <p className={styles.productDescription}>{product.description}</p>

                <div className={styles.sizeSelector}>
                    <h4>Select Size:</h4>
                    <div className={styles.sizeButtons}>
                        {product.sizes.map((size) => (
                            <button
                                key={size}
                                className={`${styles.sizeButton} ${selectedSize === size ? styles.selectedSize : ''}`}
                                onClick={() => handleSizeClick(size)}
                            >
                                {size}
                            </button>
                        ))}
                    </div>
                </div>

                <div className={styles.quantitySection}>
                    <h4>Quantity:</h4>
                    <button className={styles.quantityButton} onClick={() => handleQuantityChange('decrement')}>
                        -
                    </button>
                    <span className={styles.quantityValue}>{quantity}</span>
                    <button className={styles.quantityButton} onClick={() => handleQuantityChange('increment')}>
                        +
                    </button>
                </div>

                <div className={styles.buttonsSection}>
                    <button className={styles.addToCartButton} onClick={handleAddToCart}>
                        Add to Cart
                    </button>
                    <button className={styles.addToWishlistButton} disabled={wishlistDisabled}>
                        Add to Wishlist
                    </button>
                </div>

                <div className={styles.deliveryDetails}>
                    <h4>Delivery Details:</h4>
                    <input
                        type="text"
                        placeholder="Enter Pincode"
                        value={pincode}
                        onChange={handlePincodeChange}
                        className={styles.pincodeInput}
                    />
                    <button className={styles.checkPincodeButton}>Check</button>
                </div>

                <div className={styles.productDetails}>
                    <h4>Product Details:</h4>
                    <p><strong>Material & Care:</strong> {product.material}</p>
                    <p><strong>Care Instructions:</strong> {product.careInstructions}</p>
                    <p><strong>Country of Origin:</strong> {product.countryOfOrigin}</p>
                    <p><strong>Manufactured & Sold By:</strong> {product.manufacturer}</p>
                    <p>{product.manufacturerAddress}</p>
                    <p><strong>Customer Care No.:</strong> {product.customerCareNumber}</p>
                    <p><strong>Email:</strong> <a href={`mailto:${product.email}`}>{product.email}</a></p>
                </div>
            </div>
        </div>
    );
};

export const getStaticPaths: GetStaticPaths = async () => {
    const paths = productsData.map((product) => ({
        params: { id: product.id.toString() },
    }));

    return {
        paths,
        fallback: false,
    };
};

export const getStaticProps: GetStaticProps = async (context) => {
    const { id } = context.params!;
    const product = productsData.find((p) => p.id === parseInt(id as string));

    return {
        props: {
            product,
        },
    };
};

export default ProductDetails;
