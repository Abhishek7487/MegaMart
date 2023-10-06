import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  orderProductList: [],
  orderPrice: 0,
};

const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    setOrder(state, action) {
      state.orderProductList = action.payload.list;
      state.orderPrice = action.payload.price;
    },
  },
});

export const { setOrder } = orderSlice.actions;

export default orderSlice.reducer;
