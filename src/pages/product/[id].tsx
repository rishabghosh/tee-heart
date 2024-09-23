import { GetStaticPaths, GetStaticProps } from 'next';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '@/store/slices/cartSlice';
import styles from '@/styles/ProductDetails.module.scss';
import productsData from '@/data/products.json';
import { ProductExtended } from "@/models/ProductExtended";
import { convertToCartProduct } from "@/utils/CartItemPropConverter";
import ImageGallery from '@/components/shared/ImageGallery';
import ProductInfo from '@/components/shared/ProductInfo';
import SizeSelector from '@/components/shared/SizeSelector';
import QuantitySelector from '@/components/shared/QuantitySelector';
import ButtonsSection from '@/components/shared/ButtonsSection';
import DeliveryDetails from '@/components/shared/DeliveryDetails';
import ProductDetailsSection from '@/components/ProductDetailsSection';

interface ProductDetailsProps {
    product: ProductExtended;
}

const ProductDetails: React.FC<ProductDetailsProps> = ({ product }) => {
    const dispatch = useDispatch();
    const [selectedSize, setSelectedSize] = useState<string | null>(null);
    const [quantity, setQuantity] = useState(1);
    const [pincode, setPincode] = useState('');
    const [wishlistDisabled] = useState(true);

    const handleAddToCart = () => {
        if (selectedSize) {
            const cartProduct = convertToCartProduct(product, selectedSize, quantity);
            dispatch(addToCart(cartProduct));
        } else {
            alert('Please select a size');
        }
    };

    return (
        <div className={styles.productPage}>
            <ImageGallery imageUrls={product.imageUrl} name={product.name} />
            <div className={styles.detailsSection}>
                <ProductInfo name={product.name} price={product.price} description={product.description} />
                <SizeSelector sizes={product.sizes} selectedSize={selectedSize} onSelectSize={setSelectedSize} />
                <QuantitySelector quantity={quantity} setQuantity={setQuantity} />
                <ButtonsSection handleAddToCart={handleAddToCart} wishlistDisabled={wishlistDisabled} />
                <DeliveryDetails pincode={pincode} setPincode={setPincode} />
                <ProductDetailsSection product={product} />
            </div>
        </div>
    );
};

export const getStaticPaths: GetStaticPaths = async () => {
    const paths = productsData.map((product) => ({
        params: { id: product.id.toString() },
    }));

    return {
        paths,
        fallback: false,
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
