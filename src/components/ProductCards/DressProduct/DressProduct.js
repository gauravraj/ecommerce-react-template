import React, { useState } from "react";
import "./DressProduct.scss";
import Image1 from "../../../assets/images/dress-1.jpg";
import Image3 from "../../../assets/images/dress-3.jpg";
import Image4 from "../../../assets/images/dress-4.jpg";
import Image5 from "../../../assets/images/dress-5.jpg";
import HeartIcon from "../../../assets/icons/heart_icn.png";
import { Star, ChevronRight, ChevronLeft } from "../../../svg/Svg";
import { pink, lightgrey, purple } from "../../../constants/Colors";
import { Info, Brand, Delivery } from "./Tabs";

// const images = [
//   { source: Image1 },
//   { source: Image3 },
//   { source: Image4 },
//   { source: Image5 },
// ];

const starRatings = [pink, pink, pink, pink, lightgrey];

const tabs = [
  { name: "Info", content: <Info /> },
  { name: "Brand", content: <Brand /> },
];


class DressProduct extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
        addedToCart: false,
        activeTabIndex: 0,
        activeImageIndex: 0,
    };
  }

  componentWillUnmount() {
      
  }

  componentDidMount() {
    let cartItems = localStorage.getItem("cartItems");
    if (cartItems === null || cartItems === undefined) {
      cartItems = [];
    }
    else {
      cartItems = JSON.parse(cartItems);
      for (let i = 0; i < cartItems.length; i++) {
        if (cartItems[i].id === this.props.productDetails.id) {
          this.setState({addedToCart: true});
        }
      }
    }
  }

  onAddToCart = (product, event) => {
    let cartItems = localStorage.getItem("cartItems");
    let addedToCart = false;
    if (cartItems === null || cartItems === undefined) {
      cartItems = [];
    }
    else {
      cartItems = JSON.parse(cartItems);
      for (let i = 0; i < cartItems.length; i++) {
        if (cartItems[i].id === product.id) {
          addedToCart = true;
          break;
        }
      }
    }

    if (!addedToCart) {
      cartItems.push(product);
      localStorage.setItem("cartItems", JSON.stringify(cartItems));
      this.setState({addedToCart: true});
    }
  }

  setActiveTabIndex = (index, event) => {
    this.setState({activeTabIndex: index});
  }

  setActiveImageIndex = (index, event) => {
    this.setState({activeImageIndex: index});
  }

  render() {
    const activeImageIndex = this.state.activeImageIndex;
    const activeTabIndex = this.state.activeTabIndex;

    let productDetails = this.props.productDetails;

    let images = productDetails.images;

    return (
      <div className="dress-product-container">
        <div className="dress-product-card">
          <div className="images-section">
            <div className="active-image-container">
              <div
                className="prev-icon"
                onClick={(e) =>
                  this.setActiveImageIndex(
                    activeImageIndex === 0
                      ? images.length - 1
                      : activeImageIndex - 1, e
                  )
                }
              >
                <ChevronLeft size={20} color="grey" />
              </div>
              <img
                src={images[activeImageIndex]}
                alt="Product"
                className="active-image"
              />
              <div
                className="next-icon"
                onClick={(e) =>
                  this.setActiveImageIndex(
                    activeImageIndex === images.length - 1
                      ? 0
                      : activeImageIndex + 1, e
                  )
                }
              >
                <ChevronRight size={20} color="grey" />
              </div>
            </div>
            <div className="all-images">
              {images.map((source, index) => (
                <div
                  className="image-container"
                  style={{ borderWidth: activeImageIndex === index ? 1 : 0 }}
                  key={index}
                  onClick={(e) => this.setActiveImageIndex(index, e)}
                >
                  <img src={source} alt="Dress" />
                </div>
              ))}
            </div>
          </div>
          <div className="product-content">
            <div className="row">
              <div className="badge">
                <p>Popular</p>
              </div>
              <div className="heart-icon">
                <img src={HeartIcon} alt="heart-icon" />
              </div>
            </div>
            <p className="card-title">{productDetails.name}</p>
            <div className="rating-container">
              {starRatings.map((color, index) => (
                <div className="star">
                  <Star size={20} color={color} key={index} />
                </div>
              ))}
              <p>132 reviews</p>
            </div>
            <div className="tabs">
              {tabs.map(({ name }, index) => (
                <div
                  className="tab"
                  style={{
                    color: activeTabIndex === index ? pink : purple,
                    borderBottomColor:
                      activeTabIndex === index ? pink : lightgrey,
                  }}
                >
                  <p onClick={(e) => this.setActiveTabIndex(index, e)}>{name}</p>
                </div>
              ))}
            </div>
            <div className="tab-content">{activeTabIndex === 0 ? <Info description={productDetails.description} /> : <Brand  brand={productDetails.brand} />}</div>
            <div className="bottom-row">
              <p className="card-title">&#8377;{productDetails.price}</p>
              <button className="button-main" onClick={(e) => this.onAddToCart(productDetails, e)}>{this.state.addedToCart ? "In Cart" : "Add to cart"}</button>
              {/* <button className="button-main">Add to cart</button> */}
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default DressProduct;
