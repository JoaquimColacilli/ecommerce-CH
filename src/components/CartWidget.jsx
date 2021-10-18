import React from "react";
import "../index.css";
import cart from "../images/cart.png";

const CartWidget = () => {
  return <img src={cart} alt="carrito" className="cart" />;
};

export default CartWidget;
