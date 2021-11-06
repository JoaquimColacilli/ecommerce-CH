import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import ItemListContainer from "./container/ItemListContainer";
import ItemDetailContainer from "./container/ItemDetailContainer";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <ItemListContainer titulo="Desafío 3" />
        </Route>

        <Route exact path="/categoria/:categoriaId">
          <ItemListContainer titulo="Desafío 3" />
        </Route>

        <Route path="/producto/:id" component={ItemDetailContainer} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
