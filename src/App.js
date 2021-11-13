import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import ItemListContainer from "./container/ItemListContainer";
import ItemDetailContainer from "./container/ItemDetailContainer";
import { CartFuncion } from "./context/CartContext";
import "bootstrap/dist/css/bootstrap.min.css";
import Cart from "./components/Cart";

function App() {
  return (
    <BrowserRouter>
      <CartFuncion>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <ItemListContainer titulo="JC Gaming" />
          </Route>

          <Route exact path="/cart">
            <Cart />
          </Route>

          <Route exact path="/categoria/:categoriaId">
            <ItemListContainer titulo="JC Gaming" />
          </Route>

          <Route path="/producto/:id" component={ItemDetailContainer} />
        </Switch>
      </CartFuncion>
    </BrowserRouter>
  );
}

export default App;
