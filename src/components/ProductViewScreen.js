function ProductViewScreen({ product }) {
  return (
    <div className="productView">
      {console.log(product)}

      <img src={product.image} alt="productImg" />
      <div>
        <h2>{product.title}</h2>
        <span>$ {product.price}</span>
        <p>{product.description}</p>
        <button>Add to Cart</button>
      </div>
    </div>
  );
}

export default ProductViewScreen;
