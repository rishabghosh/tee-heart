import { GetStaticPaths, GetStaticProps } from 'next';
import Image from 'next/image';
import { useDispatch } from 'react-redux';
import { addToCart } from '@/store/slices/cartSlice';
import styles from '@/styles/ProductDetails.module.scss';
import productsData from '@/data/products.json';

interface Product {
    id: number;
    name: string;
    price: string;
    imageUrl: string;
    description: string;
    sizes: string[];
}

interface ProductDetailsProps {
    product: Product;
}

const ProductDetails: React.FC<ProductDetailsProps> = ({ product }) => {
    const dispatch = useDispatch();

    const handleAddToCart = () => {
        dispatch(addToCart(product));
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
                <p className={styles.productPrice}>{product.price}</p>
                <p className={styles.productDescription}>{product.description}</p>

                <div className={styles.sizeSelector}>
                    <h4>Select Size:</h4>
                    {product.sizes.map((size) => (
                        <button key={size} className={styles.sizeButton}>
                            {size}
                        </button>
                    ))}
                </div>

                <button className={styles.addToCartButton} onClick={handleAddToCart}>
                    Add to Cart
                </button>
            </div>
        </div>
    );
};

export const getStaticPaths: GetStaticPaths = async () => {
    // Create dynamic paths for all product pages
    const paths = productsData.map((product) => ({
        params: { id: product.id.toString() },
    }));

    return {
        paths,
        fallback: false, // Can be true if you want to support incremental builds
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
