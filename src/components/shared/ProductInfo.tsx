import styles from '@/styles/ProductDetails.module.scss';

interface ProductInfoProps {
    name: string;
    price: number;
    description: string;
}

const ProductInfo: React.FC<ProductInfoProps> = ({ name, price, description }) => (
    <>
        <h1 className={styles.productTitle}>{name}</h1>
        <p className={styles.productPrice}>${price}</p>
        <p className={styles.productDescription}>{description}</p>
    </>
);

export default ProductInfo;
