import React, { useState } from "react";

const Context = React.createContext();

const CartFuncion = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [unidades, setUnidades] = useState(0);
  const [total, setTotal] = useState(0);

  const onAdd = (producto, cantidad) => {
    const itemExiste = cart.find((item) => item.id === producto.id);
    if (!itemExiste) {
      setCart([
        ...cart,
        {
          id: producto.id,
          nombre: producto.nombre,
          precio: producto.precio,
          cantidad: cantidad,
          subtotal: producto.precio * cantidad,
          imagen: producto.imagen,
        },
      ]);
      setTotal(total + producto.precio * cantidad);
      setUnidades(unidades + 1);
    } else {
      const cartAux = cart.map((item) => {
        if (item.id === producto.id) {
          item.cantidad += cantidad;
          item.subtotal += producto.precio * cantidad;
        }
        return item;
      });
      setCart(cartAux);
      setTotal(total + producto.precio * cantidad);
    }
  };

  const eliminarCarrito = () => {
    setUnidades(0);
    setTotal(0);
    setCart([]);
    console.log(total);
  };

  // const eliminarProducto = (id) => {
  //   // cart.filter((producto) => producto.id !== id);

  //   console.log(id);
  // };

  const removeItem = (itemId) => {
    const cartWithoutItem = cart.filter((elem) => elem.id !== itemId);

    setCart(cartWithoutItem);

    setUnidades(unidades - 1);

    cart.map((car) => {
      if (car.id === itemId) setTotal(total - car.subtotal);
    });
  };

  return (
    <Context.Provider
      value={{
        cart,
        unidades,
        total,
        onAdd,
        eliminarCarrito,
        removeItem,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export { CartFuncion, Context };
