import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/ProductCard.module.scss';
import {Product} from "@/models/Product";

interface ProductCardProps {
    product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
    // const dispatch = useDispatch();

    const handleAddToCart = () => {
        // dispatch(addToCart(product));
    };

    return (
        <div className={styles.card}>
            <Link href={`/product/${product.id}`}>
                <Image
                    src={product.imageUrl[0]}
                    alt={product.name}
                    className={styles.image}
                    width={500}
                    height={500}
                />
                <h2 className={styles.name}>{product.name}</h2>
            </Link>
            <p className={styles.price}>{product.price}</p>
            <button className={styles.button} onClick={handleAddToCart}>
                Add to Cart
            </button>
        </div>
    );
};

export default ProductCard;
