import React from "react";
import CartProduct from "./CartProduct";

function CartProductList({ cart, setCart, total, setTotal }) {
  return (
    <div className="cartProductList">
      {cart.map((product) => (
        <CartProduct
          product={product}
          key={product.id}
          cart={cart}
          setCart={setCart}
          total={total}
          setTotal={setTotal}
        />
      ))}
    </div>
  );
}

export default CartProductList;
