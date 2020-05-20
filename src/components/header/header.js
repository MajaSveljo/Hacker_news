import React from "react";

import Logo from "../../assets/logo.gif";

import "./header.scss";
import { withRouter } from "react-router-dom";

const Header = ({ history }) => (
  <header>
    <img
      src={Logo}
      alt="logo"
      onClick={() => {
        history.push("/");
      }}
    />
    <span
      className="name"
      onClick={() => {
        history.push("/");
      }}
    >
      Hacker News
    </span>
  </header>
);

export default withRouter(Header);
