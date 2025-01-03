import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/ProductCard.module.scss';
import { addDomain } from "@/utils/envUrls";
import { ProductExtended } from "@/models/ProductExtended";

interface ProductCardProps {
    product: ProductExtended;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
    const { price, sellingPrice } = product;
    const hasDiscount = sellingPrice < price;
    const discountPercentage = hasDiscount
        ? Math.round(((price - sellingPrice) / price) * 100)
        : 0;

    // Render nothing if there's no discount
    if (!hasDiscount) {
        return null;
    }

    return (
        <div className={styles.card}>
            <Link href={`/product/${product.id}`} className={styles.link}>
                <div className={styles.imageContainer}>
                    <Image
                        src={addDomain(product.imageUrls[0])}
                        alt={product.name}
                        className={styles.image}
                        width={500}
                        height={500}
                    />
                </div>
                <div className={styles.details}>
                    <h3 className={styles.name}>{product.name}</h3>
                    <p className={styles.category}>{product.category}</p>
                </div>
            </Link>
            <div className={styles.priceContainer}>
                <p className={styles.price}>
                    ₹ {sellingPrice}{" "}
                    <span className={styles.originalPrice}>₹ {price}</span>
                </p>
                <p className={styles.discount}>{discountPercentage}% OFF</p>
            </div>
        </div>
    );
};

export default ProductCard;
