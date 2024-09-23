import Image from 'next/image';
import styles from '@/styles/ProductDetails.module.scss';
import { addDomain } from '@/utils/envUrls';

interface ImageGalleryProps {
    imageUrls: string[];
    name: string;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ imageUrls, name }) => (
    <div className={styles.imageSection}>
        {imageUrls.map((url, index) => (
            <Image
                key={index}
                src={addDomain(url)}
                alt={`${name} image ${index + 1}`}
                width={500}
                height={500}
                className={styles.productImage}
            />
        ))}
    </div>
);

export default ImageGallery;
