import React from "react";
import Product from "./Product";

function ProductList({ products }) {
  return (
    <div className="productList">
      {products.map((product) => (
        <Product product={product} />
      ))}
    </div>
  );
}

export default ProductList;
