import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CartProduct } from "@/models/CartProduct";
import { Cart } from "@/models/Cart";

// Initialize the cart state
const initialState = {
    cart: new Cart(),
};

// Redux slice for cart management
const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<CartProduct>) => {
            state.cart.addItem(action.payload);
        },
        removeFromCart: (state, action: PayloadAction<{ id: number, size: string }>) => {
            state.cart.removeItem(action.payload.id, action.payload.size);
        },
        changeItemQuantity: (state, action: PayloadAction<{ id: number, size: string, qty: number }>) => {
            state.cart.changeQuantity(action.payload.id, action.payload.size, action.payload.qty);
        },
    },
});

export const { addToCart, removeFromCart, changeItemQuantity } = cartSlice.actions;
export default cartSlice.reducer;
