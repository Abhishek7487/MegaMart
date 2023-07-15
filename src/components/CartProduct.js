import React from "react";

function CartProduct({ product, cart, setCart, total, setTotal }) {
  function handleRemoveFromCart() {
    setCart(cart.filter((cur) => cur.id !== product.id));
    setTotal(total - product.price);
  }

  return (
    <li className="cartProduct">
      <img src={product.image} alt="productImage" />
      <div className="cProductInfo">
        <h4>{product.name}</h4>
        <h4>₹ {product.price}</h4>
      </div>
      <div className="action">
        <i
          className="fa-solid fa-trash remove"
          onClick={handleRemoveFromCart}
        ></i>
        <div className="quantity">
          <button>-</button>
          <p>1</p>
          <button>+</button>
        </div>
      </div>
    </li>
  );
}

export default CartProduct;
