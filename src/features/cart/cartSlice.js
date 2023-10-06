import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartProductList: [],
  cartPrice: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      state.cartProductList.unshift({
        ...action.payload,
        quantity: 1,
        totalPrice: action.payload.price,
      });
      state.cartPrice = state.cartProductList.reduce(
        (acc, cartProduct) => acc + cartProduct.totalPrice,
        0
      );
    },
    removeFromCart(state, action) {
      state.cartProductList = state.cartProductList.filter(
        (item) => item.id !== action.payload
      );
      state.cartPrice = state.cartProductList.reduce(
        (acc, cartProduct) => acc + cartProduct.totalPrice,
        0
      );
    },
    increaseQuantity(state, action) {
      const item = state.cartProductList.find(
        (product) => product.id === action.payload
      );
      item.quantity++;
      item.totalPrice = item.quantity * item.price;
      state.cartPrice = state.cartProductList.reduce(
        (acc, cartProduct) => acc + cartProduct.totalPrice,
        0
      );
    },
    decreaseQuantity(state, action) {
      const item = state.cartProductList.find(
        (product) => product.id === action.payload
      );
      item.quantity--;
      item.totalPrice = item.quantity * item.price;
      state.cartPrice = state.cartProductList.reduce(
        (acc, cartProduct) => acc + cartProduct.totalPrice,
        0
      );
    },
    resetCart(state) {
      state.cartProductList = [];
      state.cartPrice = 0;
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
  resetCart,
} = cartSlice.actions;

export default cartSlice.reducer;
