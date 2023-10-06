import React from "react";
import ProductsList from "./features/products/ProductsList";
import ProductViewScreen from "./features/products/ProductViewScreen";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./ui/Home";
import AppLayout from "./ui/AppLayout";
import Cart from "./features/cart/Cart";
import OrderOverview from "./features/order/OrderOverview";

function App() {
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
