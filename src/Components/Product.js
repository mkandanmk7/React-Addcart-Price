import React from "react";

function Product(props) {
  console.log(props);
  const { product } = props;

  return (
    <div>
      <img
        className="img-fluid size"
        src={product.image}
        alt="{product.name}"
      />
      <h3>{product.name}</h3>
      <div> ${product.price}</div>
      <div>
        <button className="btn btn-success">Add cart</button>
      </div>
    </div>
  );
}

export default Product;
