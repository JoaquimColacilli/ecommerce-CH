import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import ItemCount from "../container/ItemCount";
import { Context } from "../context/CartContext";

const ItemDetail = ({ id, nombre, desc, precio, imagen, stock }) => {
  const [buy, setBuy] = useState(false);
  const { onAdd } = useContext(Context);

  const botonAgregar = (props) => {
    setBuy(true);
    onAdd({ id, nombre, precio }, props.unidades);
  };

  return !id ? (
    <h1>EL ITEM NO EXISTE</h1>
  ) : (
    <>
      <h1>{nombre}</h1>
      <div className="text-prod">
        <img src={imagen} alt={nombre} />
        <p>
          Precio: <span className="font-span">${precio}</span>
        </p>

        <p>
          <span>Descripción:</span>
        </p>

        <p>{desc}</p>

        {!buy ? (
          <ItemCount stock={stock} onAdd={botonAgregar} />
        ) : (
          <Link to="/cart">
            <button className="btn btn-success cart-button">
              Terminar Compra
            </button>
          </Link>
        )}
      </div>
    </>
  );
};

export default ItemDetail;
