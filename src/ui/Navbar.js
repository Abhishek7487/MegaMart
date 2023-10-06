import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function Navbar() {
  const cartProductList = useSelector((state) => state.cart.cartProductList);
  return (
    <nav className="navbar">
      <Link to="/productsList">
        <img src="../../logo.svg" className="logo" alt="logo" />
      </Link>
      <p>MegaMart</p>
      <div>
        {cartProductList.length > 0 && (
          <div className="cartStats">
            <div className="itemNumbers">{cartProductList.length}</div>
          </div>
        )}
        <Link to="/cart">
          <img src="../../Cart.svg" alt="cart" className="cartIcon" />
        </Link>
      </div>
    </nav>
  );
}
