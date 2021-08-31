import React from "react";
import "./Header.scss";
import Logo from "../../assets/icons/myntra-icon.png";
import { socialLinks, menulinks, navLinks } from "../../data/links";
import { purple } from "../../constants/Colors";
import { Link } from "react-router-dom";
import Button from '@material-ui/core/Button';


const Header = () => {
  return (
    <header className="header">
      <div className="top-section">
        <Link to="/" style={{textDecoration: "none"}}>
          <div className="logo">
            <img src={Logo} alt="Logo" />
            <p>Myntra</p>
          </div>
        </Link>
        <div className="social-links">
          {/* {socialLinks.map(({ Icon, id, size }, index) => (
            <div className="icon" key={index}>
              <Icon color={purple} size={size} />
            </div>
          ))} */}
          <h2>Myntra For Earth</h2>
        </div>
        <div className="extra-links">
          {menulinks.map(({ image, id, path }, index) => (
            <Link to={path}><img src={image} alt={id} key={index} /></Link>
          ))}
        </div>
      </div>
      <div style={{display: "flex", justifyContent: "space-between"}}>
        <div className="bottom-section">
          {navLinks.map(({ name, path }, index) => (
            <Link to={path} style={{textDecoration: "none"}}><p className="link" key={index}>{name}</p></Link>
          ))}
        </div>
        <div style={{display: "flex", alignItems: "center", marginRight: "10px"}}>
          <Link to="/share-clothes" style={{textDecoration: "none"}}>
            <Button variant="contained" style={{backgroundColor: "#eda3b5", padding: "15px", border: "none", color: "white"}}>Return Or Share Clothes</Button>
          </Link>
        </div>  
      </div>
    </header>
  );
};

export default Header;
