import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {CartItemProps} from "@/models/CartItemProps";

interface CartState {
    items: CartItemProps[];
}

const initialState: CartState = {
    items: [],
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<CartItemProps>) => {
            state.items.push(action.payload);
        },
        removeFromCart: (state, action: PayloadAction<number>) => {
            state.items = state.items.filter(item => item.id !== action.payload);
        },
    },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
