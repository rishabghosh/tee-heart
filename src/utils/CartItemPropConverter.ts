import {CartItemProps} from "@/models/CartItemProps";
import {ProductExtended} from "@/models/ProductExtended";

export const convertToCartItemProps = (product: ProductExtended, size: string, qty:number) : CartItemProps => {
    return {
        id: product.id,
        name: product.name,
        price: Number(product.price.slice(1)),
        size: size,
        availableSizes: product.sizes,
        qty: qty,
        description: product.description,
        imageUrl: product.imageUrl,
        onRemove: () => {},
        onMoveToWishlist: () => {},
        onIncreaseQty: () => {},
        onDecreaseQty: () => {},
    }
}