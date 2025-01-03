import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/ProductCard.module.scss';
import { addDomain } from "@/utils/envUrls";
import { ProductExtended } from "@/models/ProductExtended";

interface ProductCardProps {
    product: ProductExtended;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
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
                    {/*<button className={styles.wishlistButton}>❤️</button>*/}
                </div>
                <div className={styles.details}>
                    <h3 className={styles.name}>{product.name}</h3>
                    <p className={styles.category}>{product.category}</p>
                </div>
            </Link>
            <div className={styles.priceContainer}>
                <p className={styles.price}>₹ {product.price}</p>
            </div>
        </div>
    );
};

export default ProductCard;
