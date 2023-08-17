import React from "react";

function CartCheckout({ totalAmount, dispatch }) {
  function handleCheckout() {
    dispatch({ type: "checkOut" });
  }

  return (
    <div className="cartCheckout">
      <h3>Total</h3>
      <h1>$ {totalAmount.toFixed(2)}</h1>
      <button className="checkoutBtn" onClick={() => handleCheckout()}>
        Checkout
      </button>
    </div>
  );
}

export default CartCheckout;
