export class ProductExtended {
    id: number;
    name: string;
    price: string;
    imageUrl: string[];
    description: string = "This is a high-quality product.";
    sizes: string[];
    material: string = "Cotton";
    careInstructions: string = "Machine wash cold, tumble dry low.";
    countryOfOrigin: string = "USA";
    manufacturer: string = "Sample Manufacturer Inc.";
    manufacturerAddress: string = "1234 Manufacturer St, City, State, ZIP";
    customerCareNumber: string = "1-800-123-4567";
    email: string = "support@mockedemail.com";

    constructor(
        id: number,
        name: string,
        price: string,
        imageUrl: string[],
        sizes: string[]
    ) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.imageUrl = imageUrl;
        this.sizes = sizes;
    }
}
