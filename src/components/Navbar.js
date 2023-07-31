export default function Navbar({ cartVisibility, setCartVisibility, cart }) {
  return (
    <nav className="navbar">
      <img src=".././logo.svg" className="logo" alt="hatStore logo" />
      <div className="cartStats">
        <img
          src={!cartVisibility ? ".././Cart.svg" : ".././Cancel.svg"}
          className="cartIcon"
          alt="cart"
          onClick={() => {
            setCartVisibility(!cartVisibility);
          }}
        />
        {!cartVisibility && cart.length !== 0 && (
          <div className="itemNumbers">{cart.length}</div>
        )}
      </div>
    </nav>
  );
}
