import React from "react";

function Product({
  product,
  cart,
  setCart,
  total,
  setTotal,
  checkoutMessage,
  dispatch,
}) {
  function handleAddToCart() {
    if (cart.includes(product)) return;
    setCart([product, ...cart]);
    setTotal(total + product.price);
  }

  return (
    <li>
      <div className="imgCover">
        <div className="productActions">
          <img className="addBtn" src="../../add.svg" alt="add" />
          <img
            className="viewBtn"
            src="../../view.svg"
            alt="view"
            onClick={() =>
              dispatch({ type: "viewProduct", payload: product.id })
            }
          />
        </div>
        <img src={product.image} alt="productImage" className="productImg" />
        <p>$ {product.price}</p>
      </div>
      <div className="productInfo">
        <h4>{product.category}</h4>
        <p>{product.title}</p>
        <button className="addToCartBtn" onClick={handleAddToCart}>
          Add to cart
        </button>
      </div>
    </li>
  );
}

export default Product;
