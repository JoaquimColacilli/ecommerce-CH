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
    <div>
      <div>
        <button onClick={handleStock.restaStock}>-</button>
        <p>{unidades}</p>
        <button onClick={handleStock.sumaStock}>+</button>
      </div>
      <div>
        <p>Stock disponible: {stock}</p>
      </div>
      <div>
        {unidades === 0 ? null : (
          <button onClick={() => props.onAdd({ unidades })}>
            {" "}
            Agregar al Carrito
          </button>
        )}
      </div>
    </div>
  );
};

export default ItemCount;
