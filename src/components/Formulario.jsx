import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { Context } from "../context/CartContext";

import {
  collection,
  doc,
  setDoc,
  updateDoc,
  increment,
  serverTimestamp,
} from "@firebase/firestore";
import db from "../firebase/firebase";

const Formulario = () => {
  const { cart, eliminarCarrito } = useContext(Context);

  const crearOrden = (data) => {
    console.log(data.apellido);

    const itemsDataBase = cart.map((item) => ({
      id: item.id,
      nombre: item.nombre,
      precio: item.precio,
      cantidad: item.cantidad,
    }));

    cart.forEach(async (item) => {
      const itemRef = doc(db, "producto", item.id);
      await updateDoc(itemRef, {
        stock: increment(-item.cantidad),
      });
    });

    console.log(data.nombre);

    let orden = {
      comprador: {
        nombre: data.name,
        apellido: data.lastname,
        email: data.email,
        telefono: data.number,
      },
      total: cart.map((item) => item.subtotal),
      items: itemsDataBase,
      date: serverTimestamp(),
    };

    console.log(orden);

    const crearOrdernFirestore = async () => {
      const referenciaNuevaOrden = doc(collection(db, "ordenes"));
      await setDoc(referenciaNuevaOrden, orden);
      return referenciaNuevaOrden;
    };

    crearOrdernFirestore()
      .then((result) =>
        alert(
          "Su orden fue creada con Exito! \nEste es su numero de orden: " +
            result.id
        )
      )
      .catch((err) => console.log(err))
      .finally(eliminarCarrito());

    setTimeout(() => {
      window.location = "/";
    }, 5000);
  };

  const { register, handleSubmit } = useForm();

  return (
    <div className="container">
      <h1>Formulario de Compra</h1>
      <div className="abs-center">
        <form className="border p-3 form" onSubmit={handleSubmit(crearOrden)}>
          <div className="form-group">
            <label for="nombre">Nombre</label>
            <input
              type="text"
              placeholder="Nombre"
              className="form-control"
              {...register("name", { required: true, maxLength: 80 })}
            />
          </div>
          <div className="form-group">
            <label for="apellido">Apellido</label>
            <input
              type="text"
              placeholder="Apellido"
              className="form-control"
              {...register("lastname", { required: true, maxLength: 100 })}
            />
          </div>
          <div className="form-group">
            <label for="email">Email</label>
            <input
              type="text"
              placeholder="Email"
              className="form-control"
              {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
            />
          </div>
          <div className="form-group">
            <label for="telefono">Telefono</label>
            <input
              type="tel"
              placeholder="Telefono"
              className="form-control"
              {...register("number", {
                required: true,
                minLength: 6,
                maxLength: 12,
              })}
            />
          </div>

          <button type="submit" class="btn btn-primary" onClick={crearOrden}>
            Pagar
          </button>
        </form>
      </div>
    </div>
  );
};

export default Formulario;
