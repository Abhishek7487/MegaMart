function ProductViewScreen({ product, dispatch, cartProducts }) {
  function handleAddToCart() {
    if (cartProducts.includes(product)) return;
    dispatch({ type: "addToCart", payload: product });
  }

  return (
    <div className="productView">
      <img src={product.image} alt="productImg" />
      <div>
        <h2>{product.title}</h2>
        <span>$ {product.price}</span>
        <p>{product.description}</p>
        <button onClick={() => handleAddToCart()}>Add to Cart</button>
      </div>
    </div>
  );
}

export default ProductViewScreen;
