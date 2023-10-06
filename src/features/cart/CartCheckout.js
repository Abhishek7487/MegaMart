import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { resetCart } from "./cartSlice";
import { setOrder } from "../order/orderSlice";

function CartCheckout() {
  const dispatch = useDispatch();
  const { cartProductList, cartPrice } = useSelector((state) => state.cart);

  const newOrder = {
    list: cartProductList,
    price: cartPrice,
  };

  function handleCheckout() {
    dispatch(setOrder(newOrder));
    dispatch(resetCart());
  }

  return (
    <Link to="/order" onClick={handleCheckout} className="cartCheckout">
      <h3>Checkout &rarr;</h3>
      <div>
        <h3>Total :</h3>
        <h2>$ {cartPrice.toFixed(2)}</h2>
      </div>
    </Link>
  );
}

export default CartCheckout;
