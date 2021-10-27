import React from "react";

function Product(props) {
  console.log(props);
  const { product, incCart } = props;

  return (
    <div className="d-flex flex-column bg-light m-3 p-4 rounded">
      <img
        className="img-fluid size d-flex align-items-center"
        src={product.image}
        alt="{product.name}"
      />
      <div className="d-flex flex-column justify-content-between align-items-center">
        <div>
          <h3>{product.name}</h3>
        </div>
        <div> ${product.price}</div>
        <div className="">
          <button className="btn btn-success " onClick={() => incCart(product)}>
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default Product;
