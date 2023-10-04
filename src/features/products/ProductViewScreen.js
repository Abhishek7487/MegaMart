import { useSelector } from "react-redux";
import { useParams } from "react-router";

function ProductViewScreen() {
  function handleAddToCart() {
    // if (cartProducts.includes(product)) return;
    // dispatch({ type: "addToCart", payload: product });
  }

  const { id } = useParams();

  const activeProduct = useSelector((state) =>
    state.products.productList.find((item) => item.id === Number(id))
  );

  return (
    <div className="productView">
      <img src={activeProduct.images[0]} alt="productImg" />
      <div>
        <h2>{activeProduct.title}</h2>
        <span>$ {activeProduct.price}</span>
        <p>{activeProduct.description}</p>
        <button onClick={() => handleAddToCart()}>Add to Cart</button>
      </div>
    </div>
  );
}

export default ProductViewScreen;
