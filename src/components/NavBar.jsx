import React from "react";
import "../index.css";
import CartWidget from "./CartWidget";

import { Link } from "react-router-dom";

const NavBar = () => {
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
    <div className="topnav">
      <Link to="/" className="active" href="#home">
        Home
      </Link>
      <Link to="/categoria/A" >Auriculares</Link>
      <Link to="/categoria/B">Mouses</Link>
      <Link to="/categoria/C">Teclados</Link>
      <Link to="/cart">
        <CartWidget />
      </Link>
    </div>
  );
};

export default NavBar;
