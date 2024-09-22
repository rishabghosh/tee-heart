// models/Cart.ts
import { CartProduct } from "@/models/CartProduct";

export class Cart {
    private items: CartProduct[];

    constructor(items: CartProduct[] = []) {
        this.items = items;
    }

    // Get all cart items
    getItems(): CartProduct[] {
        return this.items;
    }

    // Add item to cart
    addItem(newItem: CartProduct): void {
        const existingItemIndex = this.items.findIndex(
            item => item.id === newItem.id && item.size === newItem.size
        );

        if (existingItemIndex !== -1) {
            // If the same product with the same size exists, update the quantity
            this.items[existingItemIndex].qty += newItem.qty;
        } else {
            // Add new item to the cart
            this.items.push(newItem);
        }
    }

    // Change the quantity of a cart item
    changeQuantity(id: number, size: string, newQty: number): void {
        const item = this.items.find(item => item.id === id && item.size === size);
        if (item && newQty > 0) {
            item.qty = newQty;
        }
    }

    // Remove an item from the cart
    removeItem(id: number, size: string): void {
        this.items = this.items.filter(item => !(item.id === id && item.size === size));
    }

    // Get total price for all items in the cart
    getTotalPrice(): number {
        return this.items.reduce((total, item) => total + item.price * item.qty, 0);
    }

    // Get the total number of items in the cart
    getTotalItems(): number {
        return this.items.reduce((total, item) => total + item.qty, 0);
    }
}
