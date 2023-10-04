import React from "react";

function Product({ product }) {
  function handleAddToCart() {
    // if (cartProducts.includes(product)) return;
    // dispatch({ type: "addToCart", payload: product });
  }
  console.log(product);
  return (
    <li>
      <div className="imgCover">
        <div className="productActions">
          <img
            className="addBtn"
            src="/public/add.svg"
            alt="add"
            onClick={() => handleAddToCart()}
          />
          <img
            className="viewBtn"
            src="/public/view.svg"
            alt="view"
            // onClick={() => dispatch({ type: "viewProduct", payload: product })}
          />
        </div>
        <img src={product.image} alt="productImage" className="productImg" />
        <p>$ {product.price}</p>
      </div>
      <div className="productInfo">
        <h4>{product.category}</h4>
        <p>{product.title}</p>
        <button className="addToCartBtn" onClick={() => handleAddToCart()}>
          Add to cart
        </button>
      </div>
    </li>
  );
}

export default Product;
