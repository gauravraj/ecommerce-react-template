import React from "react";
import "./Footer.scss";
import Logo from "../../assets/icons/myntra-icon.png";
import { socialLinks } from "../../data/links";
import { purple } from "../../constants/Colors";

const Footer = () => (
  <footer>
    <div className="logo">
      <img src={Logo} alt="Logo" />
      <p>Myntra For Earth</p>
    </div>
    <p className="text">Fashion is a popular</p>
    <p className="text">
      fast moving entity which changes every week, especially in clothing.
    </p>
    <p className="text" style={{ marginBottom: 20 }}>
      You can now help the earth, other people and yourself by offloading things you don't wear enough.
    </p>
    <div className="separator" />
    <div className="social-links">
      {socialLinks.map(({ Icon, id, size }, index) => (
        <div className="icon" key={index}>
          <Icon color={purple} size={size * 0.8} />
        </div>
      ))}
    </div>
    <div className="separator" />
    <p className="text" style={{ margin: 20 }}>
      &copy; Myntra. All rights reserved
    </p>
  </footer>
);

export default Footer;
