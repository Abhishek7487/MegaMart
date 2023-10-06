import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./features/products/productsSlice";
import cartReducer from "./features/cart/cartSlice";
import orderReducer from "./features/order/orderSlice";

const store = configureStore({
  reducer: {
    products: productsReducer,
    cart: cartReducer,
    order: orderReducer,
  },
});

export default store;
