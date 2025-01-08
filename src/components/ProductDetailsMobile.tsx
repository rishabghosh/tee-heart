import Image from "next/image";
import styles from "@/styles/ProductDetailsMobile.module.scss";
import SizeSelector from "@/components/shared/SizeSelector";
import DeliveryDetails from "@/components/shared/DeliveryDetails";
import ButtonsSection from "@/components/shared/ButtonsSection";
import ImageSlider from "@/components/ImageSlider";



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
        <div className={styles.mainContent}>
            <div className={styles.productImage}>
                <ImageSlider images={imageUrls}/>
            </div>
            <div className={styles.details}>
                <h2>{name}</h2>
                <span>{category}</span>
                <p className={styles.price}>
                    <span>₹&thinsp;{sellingPrice}</span>
                    {/*<span className={styles.mrp}>₹3398</span>{" "}*/}
                    {/*<span className={styles.discount}>(70% OFF)</span>*/}
                </p>

                <SizeSelector sizes={sizes} selectedSize={selectedSize} onSelectSize={onSelectSize}/>
            </div>

            <DeliveryDetails product={product} />
        </div>

        <div className={styles.actionButtons}>
            <ButtonsSection handleAddToCart={handleAddToCart} wishlistDisabled={wishlistDisabled}/>
        </div>
    </div>
);

export default ProductDetailsMobile;
