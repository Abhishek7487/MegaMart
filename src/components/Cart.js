import React, { useEffect } from "react";
import CartProductList from "./CartProductList";
import CartCheckout from "./CartCheckout";
import EmptyCart from "../empty-cart.png";
import CartProduct from "./CartProduct";
import { gsap } from "gsap";

function Cart({ dispatch, cartProducts, totalAmount, checkoutMessage }) {
  useEffect(function () {
    let timeLine = gsap.timeline();
    timeLine.fromTo(
      ".cart",
      {
        x: 1000,
      },
      { x: 0, duration: 0.2 }
    );
  }, []);

  function handleReturnToCart() {
    dispatch({ type: "returnToCart" });
  }

  return (
    <div className="cart">
      {checkoutMessage ? (
        <div className="checkoutMessage">
          <p>
            Thank you! for your purchase of <br />
            <span>$ {totalAmount.toLocaleString("en-US")}</span>😊
          </p>
          <button onClick={() => handleReturnToCart()}>Shop more</button>
        </div>
      ) : (
        <>
          <div className="cartHeader">
            <h3>Your Cart</h3>
            <img
              src="../../rightarrow.svg"
              className="backBtn"
              alt="rightarrow"
              onClick={() => dispatch({ type: "toggleCartVisibility" })}
            />
          </div>

          {totalAmount > 0 ? (
            <>
              <CartProductList>
                {cartProducts.map((product) => (
                  <CartProduct
                    key={product.id}
                    product={product}
                    dispatch={dispatch}
                    totalAmount={totalAmount}
                  />
                ))}
              </CartProductList>
              <CartCheckout totalAmount={totalAmount} dispatch={dispatch} />
            </>
          ) : (
            <div className="emptyCart">
              <img src={EmptyCart} alt="emptyCart" />
              <p>Your cart is empty!</p>
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default Cart;
