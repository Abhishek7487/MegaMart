import React from "react";
import ProductsList from "./features/products/ProductsList";
import ProductViewScreen from "./features/products/ProductViewScreen";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./ui/Home";
import AppLayout from "./ui/AppLayout";
import Cart from "./features/cart/Cart";
import OrderOverview from "./features/order/OrderOverview";

function App() {
  // // Reducer
  // function reducer(state, action) {
  //   switch (action.type) {
  //     case "dataReceived":
  //       return { ...state, products: action.payload };
  //     case "viewProduct":
  //       return { ...state, activeProduct: action.payload };
  //     case "toggleCartVisibility":
  //       return { ...state, cartVisibility: !state.cartVisibility };
  //     case "addToCart":
  //       return {
  //         ...state,
  //         cartProducts: [action.payload, ...state.cartProducts],
  //         totalAmount: state.totalAmount + action.payload.price,
  //       };
  //     case "removeFromCart":
  //       return {
  //         ...state,
  //         cartProducts: state.cartProducts.filter(
  //           (product) => product.id !== action.payload.product.id
  //         ),
  //         totalAmount:
  //           state.totalAmount -
  //           action.payload.product.price * action.payload.quantity,
  //       };
  //     case "quantityIncreased":
  //       return {
  //         ...state,
  //         totalAmount: state.totalAmount + action.payload,
  //       };
  //     case "quantityDecreased":
  //       return {
  //         ...state,
  //         totalAmount: state.totalAmount - action.payload,
  //       };
  //     case "checkOut":
  //       return {
  //         ...state,
  //         cartProducts: [],
  //         checkoutMessage: true,
  //       };
  //     case "returnToCart":
  //       return {
  //         ...state,
  //         checkoutMessage: false,
  //         totalAmount: 0,
  //         cartVisibility: false,
  //       };
  //     default:
  //       return "Failed";
  //   }
  // }

  const router = createBrowserRouter([
    {
      element: <AppLayout />,
      children: [
        {
          element: <Home />,
          path: "/",
        },
        {
          element: <ProductsList />,
          path: "/productsList",
        },
        {
          element: <ProductViewScreen />,
          path: "/productView/:id",
        },
        {
          element: <Cart />,
          path: "/cart",
        },
        {
          element: <OrderOverview />,
          path: "/order",
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;

/*
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
*/
