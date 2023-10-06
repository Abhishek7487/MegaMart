import React, { useEffect } from "react";
import CartProductList from "./CartProductList";
import CartCheckout from "./CartCheckout";
import EmptyCart from "../../empty-cart.png";
import CartProduct from "./CartProduct";
import { useSelector } from "react-redux";

function Cart() {
  const { cartPrice } = useSelector((state) => state.cart);

  function handleReturnToCart() {
    // dispatch({ type: "returnToCart" });
  }

  return (
    <div className="cart">
      {/* {checkoutMessage ? (
        <div className="checkoutMessage">
          <p>
            Thank you! for your purchase of <br />
            <span>$ {totalAmount.toLocaleString("en-US")}</span>😊
          </p>
          <button onClick={() => handleReturnToCart()}>Shop more</button>
        </div>
      ) : (
        <> */}
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
      {/* </> */}
      {/* )} */}
    </div>
  );
}

export default Cart;
