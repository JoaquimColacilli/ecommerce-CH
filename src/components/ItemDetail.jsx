import React from "react";

const ItemDetail = ({ id, nombre, desc, precio, imagen }) => {
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
      </div>
    </>
  );
};

export default ItemDetail;
