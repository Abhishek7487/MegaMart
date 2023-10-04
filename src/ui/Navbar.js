import { Link } from "react-router-dom";

export default function Navbar({ dispatch, cartProducts }) {
  return (
    <nav className="navbar">
      <Link to="/productsList">
        <img src="../../logo.svg" className="logo" alt="logo" />
      </Link>
      <p>TrendWardrobe</p>
      <div>
        {/* {cartProducts.length > 0 && (
          <div className="cartStats">
            <div className="itemNumbers">{cartProducts.length}</div>
          </div>
        )} */}
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
