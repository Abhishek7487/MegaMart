import { useDispatch, useSelector } from "react-redux";
import { fetchCategories, fetchProducts } from "./productsSlice";
import { useEffect } from "react";

function ProductCategoryFilter() {
  const dispatch = useDispatch();

  function handleFetchProducts(category) {
    dispatch(fetchProducts(category));
  }

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  const productCategories = useSelector((state) => state.products.categories);

  return (
    <>
      <div className="productCategoryFilter">
        <h4>Filter by category </h4>
        {productCategories.map((productCategory) => (
          <p
            key={productCategory}
            onClick={() => handleFetchProducts(productCategory)}
          >
            {productCategory}
          </p>
        ))}
      </div>
    </>
  );
}

export default ProductCategoryFilter;
