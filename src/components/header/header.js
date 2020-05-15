import React from "react";

import Logo from "../../assets/logo.gif";

import "./header.scss";
import { withRouter } from "react-router-dom";

const Header = ({ history }) => (
  <header>
    <div className="left">
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
      <span>new</span>
      <span>comments</span>
    </div>
    <div className="right">login</div>
  </header>
);

export default withRouter(Header);
