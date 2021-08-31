import React from "react";

const ProductCard = (props) => {
  let productProperties = props.product;
  let image = "";
  if (productProperties !== undefined) {
    image = productProperties.images[0]
  }

  return (
    <div className="product">
    <img src={image} alt={productProperties.name} />
    <div className="content">
      <div>
        <p className="card-title">{productProperties.name}</p>
        <p className="description">{productProperties.description}</p>
      </div>
      <div className="bottom-section">
        <p className="card-title">&#8377;{productProperties.price}</p>
        <button className="button-main">Show Now</button>
      </div>
    </div>
  </div>
  );
};

export default ProductCard;
