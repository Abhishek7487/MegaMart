export default function Navbar({
  dispatch,
  cartVisibility,
  setCartVisibility,
  cart,
}) {
  return (
    <nav className="navbar">
      <img
        src="../../logo.svg"
        className="logo"
        alt="logo"
        onClick={() => dispatch({ type: "viewProduct", payload: null })}
      />
      <p>TrendWardrobe</p>
      <img src="../../Cart.svg" alt="cart" className="cartIcon" />
    </nav>
  );
}
