import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CartProduct } from "@/models/CartProduct";

interface CartState {
    items: CartProduct[];
}

const initialState: CartState = {
    items: [],
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<CartProduct>) => {
            const existingItem = state.items.find(item => item.id === action.payload.id && item.size === action.payload.size);
            if (existingItem) {
                existingItem.qty += action.payload.qty; // Increase quantity if same product and size
            } else {
                state.items.push(action.payload); // Add new product
            }
        },
        removeFromCart: (state, action: PayloadAction<{ id: number, size: string }>) => {
            state.items = state.items.filter(item => item.id !== action.payload.id || item.size !== action.payload.size);
        },
        changeItemQuantity: (state, action: PayloadAction<{ id: number, size: string, qty: number }>) => {
            const item = state.items.find(item => item.id === action.payload.id && item.size === action.payload.size);
            if (item && action.payload.qty > 0) {
                item.qty = action.payload.qty;
            } else {
                // Optionally, remove the item if quantity is 0
                state.items = state.items.filter(item => item.id !== action.payload.id || item.size !== action.payload.size);
            }
        },
    },
});

export const { addToCart, removeFromCart, changeItemQuantity } = cartSlice.actions;
export default cartSlice.reducer;
