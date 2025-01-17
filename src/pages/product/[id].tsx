import {GetStaticPaths, GetStaticProps} from 'next';
import {useEffect, useState} from 'react';
import {useDispatch} from 'react-redux';
import {addToCart} from '@/store/slices/cartSlice';
import styles from '@/styles/ProductDetails.module.scss';
import productsData from '@/data/products.json';
import {ProductExtended} from "@/models/ProductExtended";
import {convertToCartProduct} from "@/utils/CartItemPropConverter";
import ImageGallery from '@/components/shared/ImageGallery';
import ProductInfo from '@/components/shared/ProductInfo';
import SizeSelector from '@/components/shared/SizeSelector';
import QuantitySelector from '@/components/shared/QuantitySelector';
import ButtonsSection from '@/components/shared/ButtonsSection';
import DeliveryDetails from '@/components/shared/DeliveryDetails';
import AboutProductSection from '@/components/AboutProductSection';
import {initializeProductExtended} from "@/utils/initializers";
import ProductDetailsMobile from "@/components/ProductDetailsMobile";

interface ProductDetailsProps {
    product: ProductExtended;
}

const ProductDetails: React.FC<ProductDetailsProps> = ({product}) => {
    const dispatch = useDispatch();
    const [selectedSize, setSelectedSize] = useState<string | null>(null);
    const [quantity, setQuantity] = useState(1);
    const [pincode, setPincode] = useState('');
    const [wishlistDisabled] = useState(true);

    const productExtended = initializeProductExtended(product);
    const {name, price, imageUrls, category, sizes, sellingPrice} = productExtended;

    const handleAddToCart = () => {
        if (selectedSize) {
            const cartProduct = convertToCartProduct(product, selectedSize, quantity);
            dispatch(addToCart(cartProduct));
        } else {
            alert('Please select a size');
        }
    };

    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        // Function to check screen size and aspect ratio
        const checkScreenSize = () => {
            const width = window.innerWidth;
            const height = window.innerHeight;
            const aspectRatio = height / width;

            // Check if the screen width is <= 768px or if the aspect ratio is greater than a threshold (e.g., portrait mode)
            const isMobileScreen = width <= 768 || aspectRatio > 1.5;

            console.log("check screenSize is called, screen size is", width, "aspect ratio is", aspectRatio);
            setIsMobile(isMobileScreen); // Set state based on screen size and aspect ratio
        };

        // Initial check
        checkScreenSize();

        // Add event listener for window resize
        window.addEventListener("resize", checkScreenSize);

        // Cleanup event listener on component unmount
        return () => {
            window.removeEventListener("resize", checkScreenSize);
        };
    }, []);

    if (isMobile){
        return <ProductDetailsMobile
            imageUrls={imageUrls}
            name={name}
            price={price}
            category={category}
            sellingPrice={sellingPrice}
            sizes={sizes}
            selectedSize={selectedSize}
            onSelectSize={setSelectedSize}
            handleAddToCart={handleAddToCart}
            wishlistDisabled={wishlistDisabled}
            pincode={pincode}
            setPincode={setPincode}
        />
    }

    return (
        <div className={styles.productPage}>
            <ImageGallery imageUrls={imageUrls} name={name}/>
            <div className={styles.detailsSection}>
                <div className={styles.purchaseSection}>
                    <ProductInfo name={name} price={price} category={category} sellingPrice={sellingPrice}/>
                    <SizeSelector sizes={sizes} selectedSize={selectedSize} onSelectSize={setSelectedSize}/>
                    <QuantitySelector quantity={quantity} setQuantity={setQuantity}/>
                    <ButtonsSection handleAddToCart={handleAddToCart} wishlistDisabled={wishlistDisabled}/>
                    <DeliveryDetails pincode={pincode} setPincode={setPincode}/>
                </div>
                <AboutProductSection product={product}/>
            </div>
        </div>
    );
};

export const getStaticPaths: GetStaticPaths = async () => {
    const paths = productsData.map((product) => ({
        params: {id: product.id.toString()},
    }));

    return {
        paths,
        fallback: false,
    };
};

export const getStaticProps: GetStaticProps = async (context) => {
    const {id} = context.params!;
    const product = productsData.find((p) => p.id === parseInt(id as string));

    return {
        props: {
            product,
        },
    };
};

export default ProductDetails;
