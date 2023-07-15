import React from "react";
import CartProductList from "./CartProductList";
import CartCheckout from "./CartCheckout";
import EmptyCart from "../empty-cart.png";

function Cart({ cart, setCart, total, setTotal }) {
  return (
    <div className="cart">
      <h3>Your Cart</h3>
      {total > 0 ? (
        <>
          <CartProductList
            cart={cart}
            setCart={setCart}
            total={total}
            setTotal={setTotal}
          />
          <CartCheckout total={total} />
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
