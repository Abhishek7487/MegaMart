import React from "react";

function CartCheckout({ total, setCart, setCheckoutMessage }) {
  function handleCheckout() {
    setCart([]);
    setCheckoutMessage(true);
  }

  return (
    <div className="cartCheckout">
      <h3>Total</h3>
      <h1>₹ {total.toLocaleString("en-IN")}</h1>
      <button className="checkoutBtn" onClick={handleCheckout}>
        Checkout
      </button>
    </div>
  );
}

export default CartCheckout;
