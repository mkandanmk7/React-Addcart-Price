import { useState } from "react";
import "./App.css";
import Basket from "./Components/Basket";
import Header from "./Components/Header";
import Main from "./Components/Main";

import data from "./data";

function App() {
  // cart data
  const [cart, setCart] = useState([]);
  const { products } = data;

  // increase the cart value
  const incCart = (product) => {
    const exist = cart.find((x) => x.id === product.id);
    if (exist) {
      setCart(
        cart.map((x) => {
          // eslint-disable-next-line no-unused-expressions
          return x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x;
        })
      );
    } else {
      setCart([...cart, { ...product, qty: 1 }]);
    }
  };

  const decCart = (product) => {
    const exist = cart.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      setCart(cart.filter((x) => x.id !== product.id)); //it will remove mathcing id cart value;
    } else {
      cart.map(
        (x) => (x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x) //else keep the products
      );
    }
  };

  return (
    <div className="container">
      <Header />
      <div className="d-flex my-3 ">
        <Main incCart={incCart} products={products} />
        <Basket incCart={incCart} decCart={decCart} cartItems={cart} />
      </div>
    </div>
  );
}

export default App;
