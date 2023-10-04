import React from "react";
import CartProduct from "./CartProduct";

function CartProductList({ cartProductList }) {
  return (
    <div className="cartProductList">
      {cartProductList.map((product) => (
        <CartProduct key={product.id} product={product} />
      ))}
    </div>
  );
}

export default CartProductList;
