import React, { Fragment } from "react";
import NavBar from "./components/NavBar";
import ItemListContainer from "./container/ItemListContainer";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Fragment>
      <NavBar />
      <ItemListContainer titulo="Desafío 3" />
    </Fragment>
  );
}

export default App;
