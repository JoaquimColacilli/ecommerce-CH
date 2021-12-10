import React from "react";
import { Link } from "react-router-dom";

const Item = ({ id, nombre, desc, precio, imagen }) => {
  return (
    <div className="col-lg-4 paddingCardItem">
      <div className="card">
        <div className="card-body">
          <h4 className="card-title">{nombre}</h4>
          <img src={imagen} alt={nombre} className="img-fluid" />
          <p className="card-text mt-2" style={{ fontSize: "18px" }}>
            <span style={{ fontWeight: "bold" }}>Precio: </span>${precio}
          </p>
          <p className="card-text" style={{ fontSize: "16px" }}>
            {desc}
          </p>
          <button type="button" className="btn btn-outline-dark">
            <Link
              to={`/producto/${id}`}
              style={{ textDecoration: "none", color: "black" }}
            >
              Ver Más
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Item;
