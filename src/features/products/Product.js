import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { addToCart } from "../cart/cartSlice";

function Product({ product }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const cartProductList = useSelector((state) => state.cart.cartProductList);

  function handleAddToCart() {
    const isIncluded =
      cartProductList.filter((item) => item.id === product.id).length > 0;

    if (isIncluded) return;

    dispatch(addToCart(product));
    console.log(cartProductList);
  }

  function handleViewProduct() {
    navigate(`/productView/${product.id}`);
  }

  return (
    <li>
      <div className="imgCover">
        <div className="productActions">
          <img
            className="addBtn"
            src="../../add.svg"
            alt="add"
            onClick={handleAddToCart}
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
