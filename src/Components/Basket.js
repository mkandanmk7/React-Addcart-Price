import React from "react";
import "./Css/Basket.css";

function Basket(props) {
  const { cartItems, incCart, decCart } = props;
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
      {cartItems.map((item) => (
        <div key={item.id} className="d-flex justify-content-between">
          <div className="items">{item.name}</div>
          <div className="items p-2">
            <button
              onClick={() => incCart(item)}
              className="add btn btn-success"
            >
              +
            </button>
            <button
              onClick={() => decCart(item)}
              className="remove btn btn-danger"
            >
              -
            </button>
          </div>
          <div className="items text-right">
            {/* {item.qty}x ${item.price.toFixed(2)} */}
          </div>
        </div>
      ))}
    </aside>
  );
}

export default Basket;
