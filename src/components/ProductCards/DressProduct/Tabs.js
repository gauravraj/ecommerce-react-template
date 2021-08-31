import React, { useState } from "react";
import { pink, purple } from "../../../constants/Colors";

const sizes = ["XS", "S", "M"];
const colors = ["#1C2437", "#117680", "#32E1C4"];

function setActiveColorIndex(x) {
  console.log(x);
}

function setActiveSizeIndex(x) {
  console.log(x);
}


const Info = (props) => {
  const activeColorIndex = 0
  const activeSizeIndex = 0;

  return (
    <div className="info-container">
      <p>
        {props.description}
      </p>
      <div className="specs-container">
        <div>
          <p>Size</p>
          <div className="sizes">
            {sizes.map((size, index) => (
              <div
                onClick={() => setActiveSizeIndex(index)}
                className="size"
                style={{
                  borderWidth: activeSizeIndex === index ? 0 : 1,
                  backgroundColor:
                    activeSizeIndex === index ? pink : "transparent",
                }}
                key={index}
              >
                <p
                  style={{
                    color: activeSizeIndex === index ? "white" : purple,
                  }}
                >
                  {size}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="colors-container">
          <p>Color</p>
          <div className="colors">
            {colors.map((color, index) => (
              <div
                className="active-color"
                onClick={() => setActiveColorIndex(index)}
                style={{
                  borderColor:
                    activeColorIndex === index ? color : "transparent",
                }}
              >
                <div
                  className="color"
                  key={index}
                  style={{ backgroundColor: color }}
                ></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const Brand = (props) => (
  <div className="info-container">
    <p>Brand - {props.brand}</p>
  </div>
);

const Delivery = (props) => (
  <div className="brand-container">
    <p>Delivery</p>
  </div>
);

export { Info, Brand, Delivery };
