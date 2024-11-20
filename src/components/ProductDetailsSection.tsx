import styles from '@/styles/ProductDetails.module.scss';
import {ProductExtended} from '@/models/ProductExtended';

interface ProductDetailsSectionProps {
    product: ProductExtended;
}

const ProductDetailsSection: React.FC<ProductDetailsSectionProps> = ({product}) => (
    <div className={styles.productDetails}>
        <h3>Product Details:</h3>

        <div className={styles.section}>
            <strong>Material & Care:</strong>
            <p>{product.material}</p>
            <p>{product.careInstructions}</p>
        </div>

        <div className={styles.section}>
            <strong>Country of Origin:</strong> {product.countryOfOrigin}
        </div>

        <div className={styles.section}>
            <strong>Manufactured & Sold By:</strong>
            <p>{product.manufacturer}</p>
            <p>{product.manufacturerAddress}</p>
            <p><strong>Customer Care No.:</strong> {product.customerCareNumber}</p>
            <p><strong>Email:</strong> <a href={`mailto:${product.email}`}>{product.email}</a></p>
        </div>

    </div>
);

export default ProductDetailsSection;
