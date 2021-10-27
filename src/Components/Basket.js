import React from "react";
import "./Css/Basket.css";

function Basket(props) {
  const { cartItems, incCart, decCart } = props;
  const itemsPrice = cartItems.reduce(
    (acc, current) => acc + current.price * current.qty,
    0
  );
  const taxPrice = itemsPrice * 0.12;
  const shippingPrice = itemsPrice > 1000 ? 0 : 50;
  const totalPrice = itemsPrice + taxPrice + shippingPrice;
  console.log(totalPrice);
  console.log(cartItems);
  return (
    <aside className=" basket p-3 rounded ">
      <h2 className="bg-danger p-3 rounded text-center text-light">
        Cart Items
      </h2>
      <div>
        {cartItems.length === 0 && (
          <div>
            <h1 className="text-danger">Cart is Empty</h1>
          </div>
        )}
      </div>
      {cartItems.map((item) => (
        <div
          key={item.id}
          className="d-flex align-items-center justify-content-between"
        >
          <div className="items">{item.name}</div>
          <div className="items p-2 ">
            <button
              onClick={() => incCart(item)}
              className="add btn btn-success m-2"
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
            {item.qty}x ${item.price.toFixed(2)}
          </div>
        </div>
      ))}
      <div>
        <hr />
        <div className="d-flex flex-column  -center">
          <div className="items d-flex justify-content-between">
            <h3>Items Price :</h3>
            <div className="text-right">
              <h3>${itemsPrice.toFixed(2)} </h3>
            </div>
          </div>
          <div className="items d-flex justify-content-between">
            <h3>Tax Price :</h3>
            <div className="text-right">
              <h3>${taxPrice.toFixed(2)} </h3>
            </div>
          </div>
          <div className="items d-flex justify-content-between">
            <h3>Shipping Price :</h3>
            <div className="text-right">
              <h3>${shippingPrice.toFixed(2)} </h3>
            </div>
          </div>
          <div className="items d-flex justify-content-between">
            <h2>
              <strong>Total Price :</strong>
            </h2>
            <div className="text-right">
              <h3>${totalPrice.toFixed(2)} </h3>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="d-flex justify-content-center">
        <button
          type="button"
          className="btn btn-info "
          data-toggle="modal"
          data-target="#myModal"
          // onClick={() => alert("Cart Items purchased")}
        >
          Check Out
        </button>
      </div>

      {/* modal */}
      <div className="modal fade" id="myModal">
        <div className="modal-dialog">
          <div className="modal-content">
            {/* <!-- Modal Header --> */}
            <div className="modal-header">
              <h4 className="modal-title">Purchased </h4>
              <button type="button" className="close" data-dismiss="modal">
                ×
              </button>
            </div>

            {/* <!-- Modal body --> */}
            <div className="modal-body">Cart Items purchased</div>

            {/* <!-- Modal footer --> */}
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-danger"
                data-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}

export default Basket;
