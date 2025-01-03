import React, { useState } from "react";
import Image from "next/image";
import styles from "@/styles/ImageGallery.module.scss";
import { addDomain } from "@/utils/envUrls";

interface ImageGalleryProps {
    imageUrls: string[];
    name: string;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ imageUrls, name }) => {
    const [mainImage, setMainImage] = useState(imageUrls[0]); // Default main image

    const handleImageClick = (url: string) => {
        setMainImage(url);
    };

    return (
        <div className={styles.imageGallery}>
            <div className={styles.mainImage}>
                <Image
                    src={addDomain(mainImage)}
                    alt={`${name} main image`}
                    width={600}
                    height={600}
                    className={styles.productImage}
                />
            </div>
            <div className={styles.subImages}>
                {imageUrls.map((url, index) => (
                    <div
                        key={index}
                        className={`${styles.subImage} ${
                            url === mainImage ? styles.activeSubImage : ""
                        }`}
                        onClick={() => handleImageClick(url)}
                    >
                        <Image
                            src={addDomain(url)}
                            alt={`${name} sub-image ${index + 1}`}
                            width={100}
                            height={100}
                            className={styles.subImageThumbnail}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ImageGallery;
