import React, { Fragment } from "react";
import "../index.css";
import CartWidget from "./CartWidget";

const NavBar = () => {
  return (
    <div class="topnav">
      <a class="active" href="#home">
        Home
      </a>
      <a href="#news">News</a>
      <a href="#contact">Contact</a>
      <a href="#about">About</a>
      <CartWidget />
    </div>
  );
};

export default NavBar;
