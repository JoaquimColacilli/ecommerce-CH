import React, { useState, useEffect } from "react";
import ItemList from "../components/ItemList";
import data from "../data/data";
import { useParams } from "react-router-dom";

import "../index.css";
const ItemListContainer = (props) => {
  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(true);

  const { categoriaId } = useParams();

  useEffect(() => {
    setCargando(true);
    const listaProductos = new Promise((res, rej) => {
      setTimeout(() => {
        res(data);
      }, 1000);
    });
    listaProductos.then((data) => {
      categoriaId
        ? setProductos(data.filter((i) => i.categoria === categoriaId))
        : setProductos(data);
      setCargando(false);
    });
  }, [categoriaId]);

  return (
    <div>
      <h1>{props.titulo}</h1>
      {cargando ? (
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
      ) : (
        <ItemList productos={productos} />
      )}
    </div>
  );
};

export default ItemListContainer;
