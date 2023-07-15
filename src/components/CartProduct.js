import React, { useState } from "react";

function CartProduct({ product, cart, setCart, total, setTotal }) {
  const [quantity, setQuantity] = useState(1);

  function handleRemoveFromCart() {
    setCart(cart.filter((cur) => cur.id !== product.id));
    setTotal(total - product.price * quantity);
  }

  function handleIncreaseQuantity() {
    setQuantity(quantity + 1);
    setTotal(total + product.price);
  }

  function handleDecreaseQuantity() {
    if (quantity === 1) return;
    setQuantity(quantity - 1);
    setTotal(total - product.price);
  }

  return (
    <li className="cartProduct">
      <img src={product.image} alt="productImage" />
      <div className="cProductInfo">
        <h4>{product.name}</h4>
        <h4>₹ {product.price * quantity}</h4>
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
