import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartProductList: [],
  total: 12,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      state.cartProductList.push({
        ...action.payload,
        quantity: 1,
      });
    },
    removeFromCart(state, action) {
      state.cartProductList.filter((item) => item.id !== action.payload.id);
    },
    increaseQuantity(state, action) {
      const item = state.cartProductList.find(
        (product) => product.id === action.payload
      );
      item.quantity++;
    },
    decreaseQuantity(state, action) {
      const item = state.cartProductList.find(
        (product) => product.id === action.payload
      );
      item.quantity--;
    },
  },
});

export const { addToCart, removeFromCart, increaseQuantity, decreaseQuantity } =
  cartSlice.actions;

export default cartSlice.reducer;
