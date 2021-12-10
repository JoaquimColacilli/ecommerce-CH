import React, { useState, useEffect } from "react";
import ItemList from "../components/ItemList";

import { useParams } from "react-router-dom";
import db from "../firebase/firebase";
import { collection, query, where, getDocs } from "firebase/firestore";

import "../index.css";
const ItemListContainer = (props) => {
  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(true);

  const { categoriaId } = useParams();

  useEffect(() => {
    setCargando(true);

    const myItems = categoriaId
      ? query(collection(db, "producto"), where("categoria", "==", categoriaId))
      : collection(db, "producto");

    getDocs(myItems)
      .then((res) => {
        const results = res.docs.map((doc) => {
          return { ...doc.data(), id: doc.id };
        });

        setProductos(results);
      })
      .finally(() => setCargando(false));
  }, [categoriaId]);

  return (
    <div className="container">
      <div className="row">
        <h1>{props.titulo}</h1>
      </div>
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
        <div className="row">
          <ItemList productos={productos} />
        </div>
      )}
    </div>
  );
};

export default ItemListContainer;
