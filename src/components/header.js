import React from "react";

import Logo from "../assets/logo.gif";

const Header = () => (
  <header>
    <div className="left">
      <img src={Logo} alt="logo" />
      <span className="bold">Hacker News</span>
      <span>new</span>
      <span>comments</span>
    </div>
    <div className="left">login</div>
  </header>
);

export default Header;
