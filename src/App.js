import React, { useEffect, useReducer } from "react";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import Product from "./components/Product";
import ProductViewScreen from "./components/ProductViewScreen";
import Navbar from "./components/Navbar";

function App() {
  const initialState = {
    products: [],
    activeProduct: null,
    cartProducts: [],
    cartVisibility: false,
    totalAmount: 0,
    checkoutMessage: false,
  };

  // Reducer
  function reducer(state, action) {
    switch (action.type) {
      case "dataReceived":
        return { ...state, products: action.payload };
      case "viewProduct":
        return { ...state, activeProduct: action.payload };
      case "toggleCartVisibility":
        return { ...state, cartVisibility: !state.cartVisibility };
      case "addToCart":
        return {
          ...state,
          cartProducts: [action.payload, ...state.cartProducts],
          totalAmount: state.totalAmount + action.payload.price,
        };
      case "removeFromCart":
        return {
          ...state,
          cartProducts: state.cartProducts.filter(
            (product) => product.id !== action.payload.product.id
          ),
          totalAmount:
            state.totalAmount -
            action.payload.product.price * action.payload.quantity,
        };
      case "quantityIncreased":
        return {
          ...state,
          totalAmount: state.totalAmount + action.payload,
        };
      case "quantityDecreased":
        return {
          ...state,
          totalAmount: state.totalAmount - action.payload,
        };
      case "checkOut":
        return {
          ...state,
          cartProducts: [],
          checkoutMessage: true,
        };
      case "returnToCart":
        return {
          ...state,
          checkoutMessage: false,
          totalAmount: 0,
          cartVisibility: false,
        };
      default:
        return "Failed";
    }
  }

  const [
    {
      products,
      activeProduct,
      cartProducts = [],
      cartVisibility,
      totalAmount,
      checkoutMessage,
    },
    dispatch,
  ] = useReducer(reducer, initialState);

  useEffect(function () {
    async function fetchProducts() {
      const res = await fetch("https://fakestoreapi.com/products/");
      const data = await res.json();
      dispatch({
        type: "dataReceived",
        payload: data.filter(
          (product) =>
            product.category === "men's clothing" ||
            product.category === "women's clothing"
        ),
      });
    }
    fetchProducts();
  }, []);

  return (
    <div className="App">
      <Navbar dispatch={dispatch} cartProducts={cartProducts} />
      {activeProduct ? (
        <>
          <ProductViewScreen
            product={activeProduct}
            cartProducts={cartProducts}
            dispatch={dispatch}
          />
          {cartVisibility && (
            <Cart
              checkoutMessage={checkoutMessage}
              dispatch={dispatch}
              cartVisibility={cartVisibility}
              cartProducts={cartProducts}
              totalAmount={totalAmount}
            />
          )}
        </>
      ) : (
        <>
          <ProductList>
            {products.map((product) => (
              <Product
                key={product.id}
                product={product}
                dispatch={dispatch}
                cartProducts={cartProducts}
              />
            ))}
          </ProductList>
          {cartVisibility && (
            <Cart
              checkoutMessage={checkoutMessage}
              dispatch={dispatch}
              cartVisibility={cartVisibility}
              cartProducts={cartProducts}
              totalAmount={totalAmount}
            />
          )}
        </>
      )}
    </div>
  );
}

export default App;
