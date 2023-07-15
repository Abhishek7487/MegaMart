import React from "react";
import CartProductList from "./CartProductList";
import CartCheckout from "./CartCheckout";

function Cart() {
  return (
    <div className="cart">
      <h3>Your Cart</h3>
      <CartProductList />
      <CartCheckout />
    </div>
  );
}

export default Cart;
