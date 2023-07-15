import React, { useState } from "react";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";

const initialData = [
  {
    name: "The North Face",
    description: "Class V Camp Blue Coral",
    image:
      "https://hatstore.imgix.net/196011600602_1.jpg?auto=compress%2Cformat&w=544&h=435&q=50",
    price: 2500,
  },
  {
    name: "Dickies",
    description: "Albertville Black",
    image:
      "https://hatstore.imgix.net/194904323393_1.jpg?auto=compress%2Cformat&w=544&h=435&q=50",
    price: 2070,
  },
  {
    name: "Fjällräven",
    description: "High Coast Lite Green",
    image:
      "https://hatstore.imgix.net/7323450680497_1.jpg?auto=compress%2Cformat&w=544&h=435&q=50",
    price: 3200,
  },
  {
    name: "Jack Wolfskin",
    description: "Supplex Canyon Asphalt",
    image:
      "https://hatstore.imgix.net/4064993176131_1.jpg?auto=compress%2Cformat&w=544&h=435&q=50",
    price: 2240,
  },
  {
    name: "Formula One",
    description: "Red Bull Racing F1",
    image:
      "https://hatstore.imgix.net/8719203247700_1.jpg?auto=compress%2Cformat&w=544&h=435&q=50",
    price: 2800,
  },
  {
    name: "Coal",
    description: "Provo Olive 5-Panel",
    image:
      "https://hatstore.imgix.net/840056930568_1.jpg?auto=compress%2Cformat&w=544&h=435&q=50",
    price: 3900,
  },
  {
    name: "Abducted",
    description: "See You Later Ufo Black",
    image:
      "https://hatstore.imgix.net/OB1003614_1.jpg?auto=compress%2Cformat&w=544&h=435&q=50",
    price: 3900,
  },
  {
    name: "Iconic",
    description: "Chili Black",
    image:
      "https://hatstore.imgix.net/OB1002436_1.jpg?auto=compress%2Cformat&w=544&h=435&q=50",
    price: 2300,
  },
  {
    name: "Fox",
    description: "Know No Bounds Black",
    image:
      "https://hatstore.imgix.net/191972665622_1.jpg?auto=compress%2Cformat&w=544&h=435&q=50",
    price: 1700,
  },
];

function App() {
  const [products, setProducts] = useState(initialData);
  return (
    <div className="App">
      <ProductList products={products} />
      <Cart />
    </div>
  );
}

export default App;
