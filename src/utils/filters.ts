import { ProductExtended } from "@/models/ProductExtended";
import { Product } from "@/models/Product";

export const filterProductBasedOnCustomer = (customerCategory: string, products: Product[]): ProductExtended[] => {
    return products
        .filter(product => product.customer === customerCategory)
        .map(product => new ProductExtended(
            product.id,
            product.name,
            product.price,
            product.imageUrl,
            product.category,
            product.customer,
            product.theme,
            product.sizes
        ));
};
