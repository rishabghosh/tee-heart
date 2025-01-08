import styles from "@/styles/ProductDetailsMobile.module.scss";
import SizeSelector from "@/components/shared/SizeSelector";
import DeliveryDetails from "@/components/shared/DeliveryDetails";
import ButtonsSection from "@/components/shared/ButtonsSection";
import ImageSlider from "@/components/ImageSlider";
import PriceDisplay from "@/components/shared/PriceDisplay";

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
    pincode: string;
    setPincode: React.Dispatch<React.SetStateAction<string>>;
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
                                                                       pincode,
                                                                       setPincode

                                                                   }) => (
    <div className={styles.productDetailsMobile}>
        <div className={styles.mainContent}>
            <div className={styles.productImage}>
                <ImageSlider images={imageUrls}/>
            </div>
            <div className={styles.details}>
                <h2>{name}</h2>
                <span>{category}</span>
                <PriceDisplay price={price} sellingPrice={sellingPrice}/>
                <SizeSelector
                    sizes={sizes}
                    selectedSize={selectedSize}
                    onSelectSize={onSelectSize}
                />
            </div>

            <DeliveryDetails pincode={pincode} setPincode={setPincode}/>
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
