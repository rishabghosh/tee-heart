import React, { useState } from "react";
import styles from "@/styles/AboutProduct.module.scss";
import { ProductExtended } from "@/models/ProductExtended";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

interface ProductDetailsSectionProps {
    product: ProductExtended;
}

const AboutProductSection: React.FC<ProductDetailsSectionProps> = ({ product }) => {
    const [isOpen, setIsOpen] = useState(true);

    const toggleContent = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={styles.aboutProduct}>
            <div
                className={`${styles.header} ${!isOpen ? "collapsed" : ""}`}
                onClick={toggleContent}
            >
                <h3>Product Details</h3>
                {isOpen ? <FiChevronUp className={styles["toggle-icon"]} /> : <FiChevronDown className={styles["toggle-icon"]} />}
            </div>
            <div className={`${styles.content} ${isOpen ? styles.show : ""}`}>
                <div className={styles.section}>
                    <strong>Material & Care:</strong>
                    <p>{product.material}</p>
                    <p>{product.careInstructions}</p>
                </div>
                <div className={styles.section}>
                    <strong>Country of Origin:</strong>
                    <p>{product.countryOfOrigin}</p>
                </div>
                <div className={styles.section}>
                    <strong>Manufactured & Sold By:</strong>
                    <p>{product.manufacturer}</p>
                    <p>{product.manufacturerAddress}</p>
                </div>
                <div className={styles.section}>
                    <p><strong>Customer Care No.:</strong> {product.customerCareNumber}</p>
                </div>
                <div className={styles.section}>
                    <p>
                        <strong>Email:</strong>{" "}
                        <a href={`mailto:${product.email}`}>{product.email}</a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AboutProductSection;
