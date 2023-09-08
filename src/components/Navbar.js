export default function Navbar({ dispatch, cartProducts }) {
  return (
    <nav className="navbar">
      <img
        src="../../logo.svg"
        className="logo"
        alt="logo"
        onClick={() => dispatch({ type: "viewProduct", payload: null })}
      />
      <p>TrendWardrobe</p>
      <div>
        {cartProducts.length > 0 && (
          <div className="cartStats">
            <div className="itemNumbers">{cartProducts.length}</div>
          </div>
        )}
        <img
          src="../../Cart.svg"
          alt="cart"
          className="cartIcon"
          onClick={() => dispatch({ type: "toggleCartVisibility" })}
        />
      </div>
    </nav>
  );
}
