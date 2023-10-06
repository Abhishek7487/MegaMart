import React from "react";
import CartProductList from "./CartProductList";
import CartCheckout from "./CartCheckout";
import EmptyCart from "../../empty-cart.png";
import { useSelector } from "react-redux";

function Cart() {
  const { cartPrice } = useSelector((state) => state.cart);

  return (
    <div className="cart">
      <h3>Your Cart</h3>
      {cartPrice > 0 ? (
        <>
          <CartProductList />
          <CartCheckout />
        </>
      ) : (
        <div className="emptyCart">
          <img src={EmptyCart} alt="emptyCart" />
          <p>Your cart is empty!</p>
        </div>
      )}
    </div>
  );
}

export default Cart;
