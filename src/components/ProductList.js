import React from "react";
import Product from "./Product";

function ProductList({
  products,
  cart,
  setCart,
  total,
  setTotal,
  checkoutMessage,
}) {
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
          checkoutMessage={checkoutMessage}
        />
      ))}
    </div>
  );
}

export default ProductList;
