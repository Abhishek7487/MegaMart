export default function Navbar({ dispatch }) {
  return (
    <nav className="navbar">
      <img
        src="../../logo.svg"
        className="logo"
        alt="logo"
        onClick={() => dispatch({ type: "viewProduct", payload: null })}
      />
      <p>TrendWardrobe</p>
      <img
        src="../../Cart.svg"
        alt="cart"
        className="cartIcon"
        onClick={() => dispatch({ type: "toggleCartVisibility" })}
      />
    </nav>
  );
}
