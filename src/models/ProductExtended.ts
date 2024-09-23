import {Product} from "@/models/Product";

export class ProductExtended implements Product {
    id: number;
    name: string;
    price: number;
    imageUrls: string[];
    category: string;
    customer: string;
    theme: string;
    sizes: string[];
    description: string = "This is a high-quality product.";
    material: string = "Cotton";
    careInstructions: string = "Machine wash cold, tumble dry low.";
    countryOfOrigin: string = "USA";
    manufacturer: string = "Sample Manufacturer Inc.";
    manufacturerAddress: string = "1234 Manufacturer St, City, State, ZIP";
    customerCareNumber: string = "1-800-123-4567";
    email: string = "support@mockedemail.com";

    constructor(id: number, name: string, price: number, imageUrls: string[], category: string, customer: string, theme: string, sizes: string[]) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.imageUrls = imageUrls;
        this.category = category;
        this.customer = customer;
        this.theme = theme;
        this.sizes = sizes;
    }
}
