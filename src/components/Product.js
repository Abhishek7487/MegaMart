import React from "react";

function Product({ product, cart, setCart, total, setTotal, checkoutMessage }) {
  function handleAddToCart() {
    if (cart.includes(product)) return;
    setCart([product, ...cart]);
    setTotal(total + product.price);
  }

  return (
    <li>
      <div className="imgCover">
        <img src={product.image} alt="productImage" />
        <p>$ {product.price}</p>
      </div>
      <div className="productInfo">
        <h4>{product.category}</h4>
        <p>{product.title}</p>
      </div>
    </li>
  );
}

export default Product;
