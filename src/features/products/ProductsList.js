import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "./productsSlice";
import Product from "./Product";
import ProductCategoryFilter from "./ProductCategoryFilter";

function ProductList() {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.products.productList);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <>
      <div className="productList">
        <ProductCategoryFilter />
        <div className="products">
          {productList.map((product) => (
            <Product key={product.id} product={product} />
          ))}
        </div>
      </div>
    </>
  );
}

export default ProductList;
