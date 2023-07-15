import React from "react";
import Product from "./Product";

function ProductList({ products, cart, setCart, total, setTotal }) {
  return (
    <div className="productList">
      {products.map((product) => (
        <Product
          key={product.id}
          product={product}
          products={products}
          cart={cart}
          setCart={setCart}
          total={total}
          setTotal={setTotal}
        />
      ))}
    </div>
  );
}

export default ProductList;
