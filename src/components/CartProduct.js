import React from "react";

function CartProduct() {
  return (
    <li className="cartProduct">
      <img
        src="https://hatstore.imgix.net/194904323393_1.jpg?auto=compress%2Cformat&w=544&h=435&q=50"
        alt="productImage"
      />
      <div className="cProductInfo">
        <h4>name</h4>
        <h4>₹ 00</h4>
      </div>
      <div className="action">
        <i class="fa-solid fa-trash remove"></i>
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
