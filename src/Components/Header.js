/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./Css/Header.css";

function Header(props) {
  const { countCart } = props;
  return (
    <>
      <header className="my-2 rounded d-flex justify-content-around p-3 align-items-center bg-secondary">
        <div>
          <a href="#">
            <h1>Shopify App</h1>
          </a>
        </div>
        <div className="fs-3 fw-bold text-danger">
          <a href="#/cart">
            Cart
            {countCart ? (
              <button className="btn btn-light mx-2 badge">{countCart}</button>
            ) : (
              ""
            )}
          </a>
          <a href="#/signin">SignIn</a>
        </div>
      </header>
    </>
  );
}

export default Header;
