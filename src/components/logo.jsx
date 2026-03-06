import React from 'react';
import "../styles/logo.css";
import logo from "../assets/images/logoimg.png";
const Logo = () => {
return (
  <div className="logo">
    <img src={logo} alt="Logo" />{" "}
  </div>
);
};
export default Logo;