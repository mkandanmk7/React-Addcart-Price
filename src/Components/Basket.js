import React from "react";
import "./Css/Basket.css";

function Basket({ cartItems }) {
  console.log(cartItems);
  return (
    <aside className=" basket p-3 rounded ">
      <h2>Cart Items</h2>
      <div>
        {cartItems.length === 0 && (
          <div>
            <h1 className="text-danger">Cart is Empty</h1>
          </div>
        )}
      </div>
    </aside>
  );
}

export default Basket;
