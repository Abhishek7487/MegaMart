import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";

function Product({ product }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleAddToCart() {
    // if (cartProducts.includes(product)) return;
    // dispatch({ type: "addToCart", payload: product });
  }

  function handleViewProduct() {
    navigate(`/productView/${product.id}`);
  }

  return (
    <li>
      <div className="imgCover">
        <div className="productActions">
          <embed
            className="addBtn"
            src="../../add.svg"
            alt="add"
            // onClick={() => handleAddToCart()}
          />
          <img
            className="viewBtn"
            src="../../view.svg"
            alt="view"
            onClick={handleViewProduct}
          />
        </div>
        <img
          src={product.images[0]}
          alt="productImage"
          className="productImg"
        />
        <p>$ {product.price}</p>
      </div>
      <div className="productInfo">
        <h4>{product.brand}</h4>
        <p>{product.title}</p>
        <button className="addToCartBtn" onClick={() => handleAddToCart()}>
          Add to cart
        </button>
      </div>
    </li>
  );
}

export default Product;
