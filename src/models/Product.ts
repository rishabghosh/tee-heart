export interface Product {
    id: number;
    name: string;
    price: string;
    imageUrl: string[]; // todo -> should be imageUrls
    category: string;
    customer: string;
    theme: string;
    sizes: string[];
}
