/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./Css/Header.css";

function Header() {
  return (
    <>
      <header className="d-flex justify-content-around p-3 align-items-center bg-secondary">
        <div>
          <a href="#">
            <h1>Shopify App</h1>
          </a>
        </div>
        <div className="">
          <a href="#/cart">Cart </a>
          <a href="#/signin">SignIn</a>
        </div>
      </header>
    </>
  );
}

export default Header;
