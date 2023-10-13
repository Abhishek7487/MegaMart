import { useDispatch } from "react-redux";
import { fetchProducts } from "./productsSlice";

function ProductCategoryFilter() {
  const dispatch = useDispatch();

  function handleFetchProducts(category) {
    dispatch(fetchProducts(category));
  }

  const productCategories = [
    "smartphones",
    "laptops",
    "fragrances",
    "skincare",
    "groceries",
    "home-decoration",
    "furniture",
    "tops",
    "womens-dresses",
    "womens-shoes",
    "mens-shirts",
    "mens-shoes",
    "mens-watches",
    "womens-watches",
    "womens-bags",
    "womens-jewellery",
    "sunglasses",
    "automotive",
    "motorcycle",
    "lighting",
  ];

  return (
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
  );
}

export default ProductCategoryFilter;
