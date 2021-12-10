import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import ItemCount from "../container/ItemCount";
import { Context } from "../context/CartContext";

const ItemDetail = ({ id, nombre, desc, precio, imagen, stock }) => {
  const [buy, setBuy] = useState(false);
  const { onAdd } = useContext(Context);

  const botonAgregar = (props) => {
    setBuy(true);
    onAdd({ id, nombre, precio, imagen, stock, desc }, props.unidades);
  };

  return !id ? (
    <h1>EL ITEM NO EXISTE</h1>
  ) : (
    // <>
    //   <h1>{nombre}</h1>
    //   <div className="text-prod">
    //     <img src={imagen} alt={nombre} />
    //     <p>
    //       Precio: <span className="font-span">${precio}</span>
    //     </p>

    //     <p>
    //       <span>Descripción:</span>
    //     </p>

    //     <p>{desc}</p>

    //     {!buy ? (
    //       <ItemCount stock={stock} onAdd={botonAgregar} />
    //     ) : (
    //       <Link to="/cart">
    //         <button className="btn btn-success cart-button">
    //           Terminar Compra
    //         </button>
    //       </Link>
    //     )}
    //   </div>
    // </>

    <>
      {imagen ? (
        <div className="row paddingDetail">
          <div className="col-lg-4">
            <img src={imagen} alt={nombre} className="img-fluid" />
          </div>
          <div className="col-lg-8">
            <h2>{nombre}</h2>
            <p>Stock: {stock}</p>
            <p>
              Precio: <strong>${precio}</strong>
            </p>
            <div>
              <p>Descripcion:</p>
              <p>{desc}</p>
            </div>
            {buy === false ? (
              <ItemCount stock={stock} initial={buy} onAdd={botonAgregar} />
            ) : (
              <Link to="/cart">
                <button type="button" className="btn btn-outline-dark">
                  Terminar Compra
                </button>
              </Link>
            )}
          </div>
        </div>
      ) : (
        <div className="sk-circle">
          <div className="sk-circle1 sk-child"></div>
          <div className="sk-circle2 sk-child"></div>
          <div className="sk-circle3 sk-child"></div>
          <div className="sk-circle4 sk-child"></div>
          <div className="sk-circle5 sk-child"></div>
          <div className="sk-circle6 sk-child"></div>
          <div className="sk-circle7 sk-child"></div>
          <div className="sk-circle8 sk-child"></div>
          <div className="sk-circle9 sk-child"></div>
          <div className="sk-circle10 sk-child"></div>
          <div className="sk-circle11 sk-child"></div>
          <div className="sk-circle12 sk-child"></div>
        </div>
      )}
    </>
  );
};

export default ItemDetail;
