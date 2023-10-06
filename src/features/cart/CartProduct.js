import React, { useState } from "react";

function CartProduct({ product }) {
  const [quantity, setQuantity] = useState(1);

  function handleRemoveFromCart() {
    // dispatch({ type: "removeFromCart", payload: { product, quantity } });
  }

  function handleIncreaseQuantity() {
    // setQuantity(quantity + 1);
    // dispatch({ type: "quantityIncreased", payload: product.price });
  }

  function handleDecreaseQuantity() {
    // if (quantity === 1) return;
    // setQuantity(quantity - 1);
    // dispatch({ type: "quantityDecreased", payload: product.price });
  }

  return (
    <li className="cartProduct">
      <img src={product.images[0]} alt="productImage" />
      <div className="cProductInfo">
        <p>{product.title}</p>
        <h4>$ {(product.price * quantity).toFixed(2)}</h4>
      </div>
      <div className="action">
        <i
          className="fa-solid fa-trash remove"
          onClick={handleRemoveFromCart}
        ></i>
        <div className="quantity">
          <button onClick={handleDecreaseQuantity}>-</button>
          <p>{quantity}</p>
          <button onClick={handleIncreaseQuantity}>+</button>
        </div>
      </div>
    </li>
  );
}

export default CartProduct;
