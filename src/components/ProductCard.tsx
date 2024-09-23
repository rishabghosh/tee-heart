import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/ProductCard.module.scss';
import {addDomain} from "@/utils/envUrls";
import {ProductExtended} from "@/models/ProductExtended";

interface ProductCardProps {
    product: ProductExtended;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
    return (
        <div className={styles.card}>
            <Link href={`/product/${product.id}`}>
                <Image
                    src={addDomain(product.imageUrls[0])}
                    alt={product.name}
                    className={styles.image}
                    width={500}
                    height={500}
                />
                <h2 className={styles.name}>{product.name}</h2>
            </Link>
            <p className={styles.price}>₹ {product.price}</p>
        </div>
    );
};

export default ProductCard;
