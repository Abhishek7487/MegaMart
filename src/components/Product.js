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
        <p>₹{product.price}</p>
      </div>
      <div className="productDetials">
        <div className="productInfo">
          <h4>{product.name}</h4>
          <p>{product.description}</p>
        </div>
        <div>
          {checkoutMessage ? (
            <button className="btn" onClick={handleAddToCart} disabled>
              Add to cart
            </button>
          ) : (
            <button className="btn" onClick={handleAddToCart}>
              Add to cart
            </button>
          )}
        </div>
      </div>
    </li>
  );
}

export default Product;
