import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { resetCart } from "./cartSlice";

function CartCheckout() {
  const dispatch = useDispatch();
  const cartPrice = useSelector((state) => state.cart.cartPrice);

  function handleResetCart() {
    dispatch(resetCart());
  }

  return (
    <Link to="/order" onClick={handleResetCart} className="cartCheckout">
      <h3>Checkout &rarr;</h3>
      <div>
        <h3>Total :</h3>
        <h2>$ {cartPrice.toFixed(2)}</h2>
      </div>
    </Link>
  );
}

export default CartCheckout;
