import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {CartProduct} from "@/models/CartProduct";

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
            state.items.push(action.payload);
        },
        removeFromCart: (state, action: PayloadAction<number>) => {
            state.items = state.items.filter(item => item.id !== action.payload);
        },
        changeItemQuantity: (state, action: PayloadAction<{ id: number, qty: number }>) => {
            const item = state.items.find(item => item.id === action.payload.id);
            if (item) {
                item.qty = action.payload.qty;
            }
        },
    },
});

export const { addToCart, removeFromCart, changeItemQuantity } = cartSlice.actions;
export default cartSlice.reducer;
