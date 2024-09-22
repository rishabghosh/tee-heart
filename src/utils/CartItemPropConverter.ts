import {ProductExtended} from "@/models/ProductExtended";
import {CartProduct} from "@/models/CartProduct";

export const convertToCartProduct = (product: ProductExtended, size: string, qty: number): CartProduct => {
    return {
        id: product.id,
        name: product.name,
        price: Number(product.price.slice(1)),
        size: size,
        qty: qty,
        description: product.description,
        imageUrl: product.imageUrl,
    }
}