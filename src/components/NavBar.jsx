import React, { Fragment } from "react";
import "../index.css";
import CartWidget from "./CartWidget";
import { Nav, NavDropdown } from "react-bootstrap";

import { NavLink, Link } from "react-router-dom";

const NavBar = () => {
  const categories = [
    { id: "ghfj", address: "/", text: "Productos" },
    { id: "fl2k", address: "/categoria/A", text: "Auriculares" },
    { id: "sqhs", address: "/categoria/B", text: "Mouses" },
    { id: "hukw", address: "/categoria/C", text: "Teclados" },
  ];

  return (
    // <section style={{ background: "lightgray" }}>
    //   <CartWidget />
    //   {categories.map((cat) => {
    //     return (
    //       <div className="links" key={cat.id}>
    //         <Link to={cat.address} exact activeClassName="activeClass">
    //           {cat.text}
    //         </Link>
    //       </div>
    //     );
    //   })}
    // </section>
    <div class="topnav">
      <Link to="/" class="active" href="#home">
        Home
      </Link>
      <Link to="/producto/A">Auriculares</Link>
      <Link to="/producto/B">Mouses</Link>
      <Link to="/producto/C">Teclados</Link>
      <CartWidget />
    </div>
  );
};

export default NavBar;
