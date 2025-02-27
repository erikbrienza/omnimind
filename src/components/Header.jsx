import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const Header = () => {
  return (
    <header className="header">
      <Link to="/">
        <img src={logo} alt="OmniMind Logo" className="logo" />
      </Link>
    </header>
  );
};

export default Header;