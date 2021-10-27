import React from "react";
import Product from "./Product";
import "./Css/Main.css";

function Main(props) {
  const { products, incCart } = props;
  console.log(products);
  return (
    <main className="main rounded p-4">
      <h2 className="text-warning">Products</h2>
      <div className="d-flex justify-content-between">
        {products.map((data) => (
          <Product key={data.id} incCart={incCart} product={data} />
        ))}
      </div>
    </main>
  );
}

export default Main;
