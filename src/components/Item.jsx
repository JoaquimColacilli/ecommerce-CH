import React from "react";
import { Link } from "react-router-dom";

const Item = ({ id, nombre, desc, precio, imagen }) => {
  console.log(id);
  return (
    // <div className="container">
    //   <div className="row">
    //     <div className="col-md">
    //       <div className="card text-center">
    //         <div className="card-body">
    //           <h4 className="card-title">{nombre}</h4>
    //           <p className="card-text">{desc}</p>
    //           <span>
    //             <img src={imagen} alt={nombre} className={"small-img"} />
    //           </span>
    //           <p className="card-text">${precio}</p>

    //           <Link to={`/producto/${id}`} className="btn btn-primary">
    //             Ver Más
    //           </Link>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div className="col-lg-4 paddingCardItem">
      <div className="card">
        <div className="card-body">
          <h4 className="card-title">{nombre}</h4>
          <img src={imagen} alt={nombre} className="img-fluid" />
          <p className="card-text">${precio}</p>
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
