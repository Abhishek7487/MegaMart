import React from "react";
import CartProduct from "./CartProduct";
import { useSelector } from "react-redux";

function CartProductList() {
  const cartProductList = useSelector((state) => state.cart.cartProductList);

  return (
    <div className="cartProductList">
      {cartProductList.map((product) => (
        <CartProduct key={product.id} product={product} />
      ))}
    </div>
  );
}

export default CartProductList;
