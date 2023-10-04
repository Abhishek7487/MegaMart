import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { addToCart } from "../cart/cartSlice";

function ProductViewScreen() {
  const cartProductList = useSelector((state) => state.cart.cartProductList);
  const dispatch = useDispatch();

  const { id } = useParams();

  const activeProduct = useSelector((state) =>
    state.products.productList.find((item) => item.id === Number(id))
  );

  function handleAddToCart() {
    const isIncluded =
      cartProductList.filter((item) => item.id === activeProduct.id).length > 0;
    if (isIncluded) return;
    dispatch(addToCart(activeProduct));
    console.log(cartProductList);
  }

  return (
    <div className="productView">
      <img src={activeProduct.images[0]} alt="productImg" />
      <div>
        <h2>{activeProduct.title}</h2>
        <span>$ {activeProduct.price}</span>
        <p>{activeProduct.description}</p>
        <button onClick={handleAddToCart}>Add to Cart</button>
      </div>
    </div>
  );
}

export default ProductViewScreen;
