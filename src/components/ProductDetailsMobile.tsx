import styles from "@/styles/ProductDetailsMobile.module.scss";
import SizeSelector from "@/components/shared/SizeSelector";
import DeliveryDetails from "@/components/shared/DeliveryDetails";
import ButtonsSection from "@/components/shared/ButtonsSection";
import ImageSlider from "@/components/ImageSlider";

interface ProductDetailsMobileProps {
    imageUrls: string[];
    name: string;
    price: number;
    category: string;
    sellingPrice: number;
    sizes: string[];
    selectedSize: string | null;
    onSelectSize: (size: string) => void;
    handleAddToCart: () => void;
    wishlistDisabled: boolean;
    product: Record<string, any>; // Replace with specific product type if available
}

const ProductDetailsMobile: React.FC<ProductDetailsMobileProps> = ({
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
                                                                       product,
                                                                   }) => (
    <div className={styles.productDetailsMobile}>
        <div className={styles.mainContent}>
            <div className={styles.productImage}>
                <ImageSlider images={imageUrls} />
            </div>
            <div className={styles.details}>
                <h2>{name}</h2>
                <span>{category}</span>
                <p className={styles.price}>
                    <span>₹&thinsp;{sellingPrice}</span>
                    {/* Uncomment if MRP and discount details are needed */}
                    {/*<span className={styles.mrp}>₹{price}</span>{" "}*/}
                    {/*<span className={styles.discount}>(70% OFF)</span>*/}
                </p>

                <SizeSelector
                    sizes={sizes}
                    selectedSize={selectedSize}
                    onSelectSize={onSelectSize}
                />
            </div>

            <DeliveryDetails product={product} />
        </div>

        <div className={styles.actionButtons}>
            <ButtonsSection
                handleAddToCart={handleAddToCart}
                wishlistDisabled={wishlistDisabled}
            />
        </div>
    </div>
);

export default ProductDetailsMobile;
