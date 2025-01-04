import {Product} from "@/models/Product";
import {sellingPriceCalculator} from "@/utils/calculators";

export class ProductExtended implements Product {
    id: number;
    name: string;
    price: number;
    promotions: string[]
    sellingPrice: number;
    imageUrls: string[];
    category: string;
    customer: string;
    theme: string;
    sizes: string[];
    description: string = "This is a high-quality product.";
    material: string = "Premium Heavy Gauge Fabric, 100% Organic cotton";
    careInstructions: string = "Hand wash or machine wash";
    countryOfOrigin: string = "India (and proud)";
    manufacturer: string = "Sample Manufacturer Inc.";
    manufacturerAddress: string = "1234 Manufacturer St, City, State, ZIP";
    customerCareNumber: string = "1-800-123-4567";
    email: string = "support@mockedemail.com";

    constructor(
        id: number,
        name: string,
        price: number,
        promotions: string[],
        imageUrls: string[],
        category: string,
        customer: string,
        theme: string,
        sizes: string[]
    ) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.promotions = promotions;
        this.imageUrls = imageUrls;
        this.category = category;
        this.customer = customer;
        this.theme = theme;
        this.sizes = sizes;
        this.sellingPrice = sellingPriceCalculator(this.promotions[0], this.price)
    }
}
