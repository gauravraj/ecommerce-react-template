import React from "react";
import "./Products.scss";
import ProductCard from "./ProductCard";
import { Link } from "react-router-dom";

const Products = (props) => {

  let title = props.title;
  if (title === undefined) {
    title = "You may like";
  }

  let products = props.productList;
  if (products === null || products === undefined) {
    products = [];
    title = "";
  }

  return (
    <div className="wrapper">
      <div className="products">
        <p className="card-title">{title}</p>
        <div className="items">
          {products.map((product, index) => (
            <Link to={{pathname:"/pdp", state:{product}}} style={{textDecoration: "none"}}><ProductCard product={product} key={index} /></Link>
          ))}
        </div>
      </div>
    </div>
  )
};

export default Products;
