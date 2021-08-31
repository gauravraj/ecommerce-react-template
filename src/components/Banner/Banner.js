import React from "react";
import "./Banner.scss";
import BannerImg from "../../assets/images/op.png";

const Banner = () => {
  return (
    <div className="banner">
      <div className="line" style={{ top: 100, height: 260 }} />
      <div className="line" style={{ right: 200 }} />
      <div className="line" style={{ top: 200, height: 140, right: 300 }} />
      <div className="line" style={{ right: 600, height: 420 }} />
      <div className="line" style={{ right: 700, height: 80 }} />
      <div className="content">
        <p className="title">Admire Stylish Dresses & Looks</p>
        <p className="title">That Help The World</p>
        <p className="subtitle">
          Take a look at designs that are made of reusable material, brand new designs that have a buy-back clause and also look at sharing options where you can share clothes with others to reduce carbon footprint.
        </p>
        {/* <button>Show More</button> */}
      </div>
      <div className="image-container">
        <img src={BannerImg} alt="Model" />
      </div>
    </div>
  );
};

export default Banner;
