import styles from '@/styles/AboutProduct.module.scss';
import {ProductExtended} from '@/models/ProductExtended';
import {useState} from "react";

interface ProductDetailsSectionProps {
    product: ProductExtended;
}

const AboutProductSection: React.FC<ProductDetailsSectionProps> = ({product}) => {
    const [isOpen, setIsOpen] = useState(true);

    const toggleContent = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={styles.aboutProduct}>
            <div className={styles.header} onClick={toggleContent}>
                <h3>Product Details</h3>
                <span className={styles["toggle-icon"]}>{isOpen ? '▲' : '▼'}</span>
            </div>

            <div className={`${styles.content} ${isOpen ? styles.show : ""}`}>

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

        </div>
    );
};

export default AboutProductSection;
