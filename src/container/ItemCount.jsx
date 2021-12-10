import React, { useState } from "react";

const ItemCount = (props) => {
  const [stock, setStock] = useState(props.stock);
  const [unidades, setUnidades] = useState(0);

  const handleStock = {
    sumaStock: () => {
      if (stock === 0) {
        alert("No hay más stock");
      } else {
        setUnidades(unidades + 1);
        setStock(stock - 1);
      }
    },
    restaStock: () => {
      if (unidades === 0) {
        alert("No se pueden seleccionar menos de 0");
      } else {
        setUnidades(unidades - 1);
        setStock(stock + 1);
      }
    },
  };

  return (
    // <div>
    //   <div className="center">
    //     <div className="input-group">
    //       <span className="input-group-btn">
    //         <button
    //           onClick={handleStock.restaStock}
    //           type="button"
    //           className="btn btn-danger btn-number"
    //           data-type="minus"
    //           data-field="quant[2]"
    //         >
    //           <span className="glyphicon glyphicon-minus">-</span>
    //         </button>
    //       </span>
    //       <input
    //         type="text"
    //         name="quant[2]"
    //         className="form-control input-number"
    //         value={unidades}
    //         min="1"
    //         max="100"
    //       />
    //       <span class="input-group-btn">
    //         <button
    //           onClick={handleStock.sumaStock}
    //           type="button"
    //           className="btn btn-success btn-number"
    //           data-type="plus"
    //           data-field="quant[2]"
    //         >
    //           <span className="glyphicon glyphicon-plus">+</span>
    //         </button>
    //       </span>
    //     </div>
    //   </div>

    //   <div>
    //     {unidades === 0 ? null : (
    //       <div className="center">
    //         <div className="buttons d-flex flex-row">
    //           <button
    //             onClick={() => props.onAdd({ unidades })}
    //             className="btn btn-success cart-button"
    //           >
    //             Agregar al carrito
    //           </button>
    //         </div>
    //       </div>
    //     )}
    //   </div>
    // </div>
    <div className="col-lg-4 contenedorContador">
      <div className="contadorItems">
        <button
          type="button"
          className="btn btn-outline-dark"
          onClick={handleStock.restaStock}
        >
          -
        </button>
        <span className="spanContador">{unidades}</span>
        {/* {
                    (cantProductos === 0)
                    ? <span className="spanContador">{cantProductos+1}</span>
                    : <span className="spanContador">{cantProductos}</span>
                } */}
        <button
          type="button"
          className="btn btn-outline-dark"
          onClick={handleStock.sumaStock}
        >
          +
        </button>
      </div>
      <div>
        {unidades === 0 ? null : (
          <div className="center">
            <div>
              <button
                onClick={() => props.onAdd({ unidades })}
                className="btn btn-outline-dark"
              >
                Agregar al carrito
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ItemCount;
