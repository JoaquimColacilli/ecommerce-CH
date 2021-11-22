import React, { useContext } from "react";
import { Context } from "../context/CartContext";

import { Link } from "react-router-dom";
const Cart = () => {
  const { cart, total, unidades, eliminarCarrito, removeItem } =
    useContext(Context);
  console.log(cart);
  return (
    <>
      {total !== 0 ? (
        <h2 style={{ textAlign: "center" }}>
          El total del carrito es ${total} y tenes {unidades} unidad/es.
        </h2>
      ) : (
        <div style={{ textAlign: "center" }}>
          <h2>No hay productos en el carrito</h2>
          <Link to="/" className="btn btn-success">
            Ver Productos
          </Link>
        </div>
      )}
      {total === 0 ? null : (
        <div className="container mt-5 mb-5">
          <div className="d-flex justify-content-center row">
            <div className="col-md-8">
              <div className="p-2">
                <h4>Carrito</h4>
                <div className="d-flex flex-row align-items-center pull-right">
                  <i className="fa fa-angle-down"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {cart.map((item) => (
        <div className="container mt-5 mb-5">
          <div className="d-flex justify-content-center row">
            <div className="col-md-8">
              <div className="d-flex flex-row justify-content-between align-items-center p-2 bg-white mt-4 px-3 rounded">
                <div className="mr-1">
                  <img
                    className="rounded"
                    src={item.imagen}
                    width="70"
                    alt="img"
                  />
                </div>
                <div className="d-flex flex-column align-items-center product-details">
                  <span className="font-weight-bold">{item.nombre}</span>
                </div>
                <div className="d-flex flex-row align-items-center qty">
                  <i className="fa fa-minus text-danger"></i>
                  <h5 className="text-grey mt-1 mr-1 ml-1">{item.cantidad}</h5>
                  <i className="fa fa-plus text-success"></i>
                </div>
                <div>
                  <h5 className="text-grey">${item.precio}</h5>
                </div>
                <div className="d-flex align-items-center">
                  <button
                    className="fa fa-trash mb-1 text-danger"
                    onClick={() => removeItem(item.id)}
                  >
                    X
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
      {total === 0 ? null : (
        <div className="container mt-3 mb-3">
          <div className="d-flex justify-content-center row">
            <div className="col-md-8">
              <div className="d-flex flex-row align-items-center mt-3 p-2 bg-white rounded">
                <button
                  className="btn btn-warning btn-block btn-lg ml-2"
                  type="button"
                >
                  Pagar
                </button>
              </div>
              <div className="d-flex flex-row align-items-center  p-2 bg-white rounded">
                <button
                  onClick={() => eliminarCarrito()}
                  className="btn btn-danger btn-block btn-lg ml-2"
                  type="button"
                >
                  Eliminar Productos
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Cart;
