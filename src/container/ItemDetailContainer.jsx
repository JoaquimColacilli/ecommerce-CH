import React, { useState, useEffect } from "react";
import ItemDetail from "../components/ItemDetail";

import { useParams } from "react-router-dom";

import db from "../firebase/firebase";
import { doc, getDoc } from "firebase/firestore";

const ItemDetailContainer = () => {
  const [item, setItem] = useState({});
  const [cargando, setCargando] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    setCargando(true);
    // const getItems = new Promise((resolve) => {
    //   setTimeout(() => {
    //     resolve(data);
    //   }, 1000);
    // });

    // getItems
    //   .then((res) => {
    //     setItem(res.find((i) => i.id === id));
    //   })
    //   .finally(() => setCargando(false));

    const myItem = doc(db, "producto", id);

    getDoc(myItem)
      .then((res) => {
        const result = { id: res.id, ...res.data() };
        setItem(result);
      })
      .finally(() => {
        setCargando(false);
      });
  }, [id]);

  return (
    <div>
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
        <div className="container">
          <ItemDetail {...item} />
        </div>
      )}
    </div>
  );
};

export default ItemDetailContainer;
