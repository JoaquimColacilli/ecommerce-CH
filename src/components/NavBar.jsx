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
      <Link to="/producto/uhkPpgjmoumXnC5Hiy40" >Auriculares</Link>
      <Link to="/producto/Y87rgkpLapaavUaNIlzO">Mouses</Link>
      <Link to="/producto/PQ16M2JRsa1zZybmMdbK">Teclados</Link>
      <Link to="/cart">
        <CartWidget />
      </Link>
    </div>
  );
};

export default NavBar;
