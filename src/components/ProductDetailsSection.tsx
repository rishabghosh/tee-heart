import styles from '@/styles/ProductDetails.module.scss';
import { ProductExtended } from '@/models/ProductExtended';

interface ProductDetailsSectionProps {
    product: ProductExtended;
}

const ProductDetailsSection: React.FC<ProductDetailsSectionProps> = ({ product }) => (
    <div className={styles.productDetails}>
        <h4>Product Details:</h4>
        <p><strong>Material & Care:</strong> {product.material}</p>
        <p><strong>Care Instructions:</strong> {product.careInstructions}</p>
        <p><strong>Country of Origin:</strong> {product.countryOfOrigin}</p>
        <p><strong>Manufactured & Sold By:</strong> {product.manufacturer}</p>
        <p>{product.manufacturerAddress}</p>
        <p><strong>Customer Care No.:</strong> {product.customerCareNumber}</p>
        <p><strong>Email:</strong> <a href={`mailto:${product.email}`}>{product.email}</a></p>
    </div>
);

export default ProductDetailsSection;
