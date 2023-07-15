import React from "react";

function CartCheckout({ total }) {
  return (
    <div className="cartCheckout">
      <h3>Total</h3>
      <h1>₹ {total}</h1>
      <button className="checkoutBtn">Checkout</button>
    </div>
  );
}

export default CartCheckout;
