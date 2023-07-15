import React from "react";

function Product({ product }) {
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
          <button className="btn">Add to cart</button>
        </div>
      </div>
    </li>
  );
}

export default Product;
