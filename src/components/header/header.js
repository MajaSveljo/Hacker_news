import React from "react";

import Logo from "../../assets/logo.gif";

import "./header.scss";

const Header = () => (
  <header>
    <div className="left">
      <img src={Logo} alt="logo" />
      <span className="name">Hacker News</span>
      <span>new</span>
      <span>comments</span>
    </div>
    <div className="right">login</div>
  </header>
);

export default Header;
