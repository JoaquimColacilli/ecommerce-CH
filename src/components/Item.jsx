import React from "react";

const Item = ({ nombre, desc, precio }) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md">
          <div className="card text-center">
            <div className="card-body">
              <h4 className="card-title">{nombre}</h4>
              <p className="card-text">{desc}</p>
              <p className="card-text">${precio}</p>
              <a href="#" className="btn btn-primary">
                Ver Más
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item;
