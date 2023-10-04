import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "./productsSlice";

function ProductList() {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.products.productList);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  console.log(productList);

  return (
    <div className="productList">
      <h1>Product List</h1>
      {/* {products.map((product) => (
        <Product key={product.id} product={product} />
      ))} */}
    </div>
  );
}

export default ProductList;
