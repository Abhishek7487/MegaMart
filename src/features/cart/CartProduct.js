import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decreaseQuantity,
  increaseQuantity,
  removeFromCart,
} from "./cartSlice";

function CartProduct({ product }) {
  const dispatch = useDispatch();

  const quantity = useSelector(
    (state) =>
      state.cart.cartProductList.find((item) => item.id === product.id).quantity
  );

  function handleRemoveFromCart() {
    dispatch(removeFromCart(product.id));
  }

  function handleIncreaseQuantity() {
    dispatch(increaseQuantity(product.id));
  }

  function handleDecreaseQuantity() {
    if (quantity === 1) return;
    dispatch(decreaseQuantity(product.id));
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
