import React, { useEffect, useReducer, useState } from "react";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import Product from "./components/Product";
import Loader from "./components/Loader";

function App() {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  const initialState = {
    products: [],
    loading: false,
    cartContent: [],
    cartVisibility: false,
    totalAmount: 0,
    checkoutMessage: false,
  };

  function reducer(state, action) {
    switch (action.type) {
      case "dataReceived":
        return { ...state, products: action.payload };
      case "startLoading":
        return { ...state, loading: true };
      case "stopLoader":
        return { ...state, loading: false };
      default:
        return state;
    }
  }

  const [
    {
      products,
      cartContent,
      cartVisibility,
      totalAmount,
      checkoutMessage,
      loading,
    },
    dispatch,
  ] = useReducer(reducer, initialState);

  useEffect(function () {
    async function fetchProducts() {
      dispatch({ type: "startLoading" });
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
      dispatch({ type: "stopLoader" });
    }
    fetchProducts();
  }, []);

  return (
    <div className="App">
      {loading ? (
        <Loader />
      ) : (
        <>
          <ProductList>
            {products.map((product) => (
              <Product
                key={product.id}
                product={product}
                products={products}
                cart={cart}
                setCart={setCart}
                total={total}
                setTotal={setTotal}
                checkoutMessage={checkoutMessage}
              />
            ))}
          </ProductList>
          <Cart
            cart={cart}
            setCart={setCart}
            total={total}
            setTotal={setTotal}
            checkoutMessage={checkoutMessage}
            // setCheckoutMessage={setCheckoutMessage}
            cartVisibility={cartVisibility}
            // setCartVisibility={setCartVisibility}
          />
        </>
      )}
    </div>
  );
}

export default App;
