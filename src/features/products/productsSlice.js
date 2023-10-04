import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  productList: [],
  activeProduct: null,
  status: "idle",
  error: null,
};

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async function () {
    const res = await fetch("https://fakestoreapi.com/products/");
    const data = await res.json();
    const filteredData = data.filter(
      (product) =>
        product.category === "men's clothing" ||
        product.category === "women's clothing"
    );
    return filteredData;
  }
);

const ProductsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    changeActiveProduct(state, action) {
      state.activeProduct = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.productList = action.payload;
        state.status = "idle";
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = "error";
        state.error = action.error.message;
      });
  },
});

export const { changeActiveProduct } = ProductsSlice.actions;

export default ProductsSlice.reducer;
