import {ProductExtended} from "@/models/ProductExtended";

export const initializeProductExtended = (product: ProductExtended) => {
    const {id, name, price, promotions, imageUrls, category, customer, theme, sizes} = product;
    return new ProductExtended(id, name, price, promotions, imageUrls, category, customer, theme, sizes)
}