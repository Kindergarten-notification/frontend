import React from "react";
import HeaderImg from "../../static/img/header-img.png";
import "./header.css";

const Header = () => {
  return (
    <div className="header">
      <img className="header-image" src={HeaderImg} alt="HEADER" />
    </div>
  );
};

export default Header;
