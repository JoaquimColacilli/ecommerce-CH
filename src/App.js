import React, { Fragment } from "react";
import NavBar from "./components/NavBar";
import ItemListContainer from "./container/ItemListContainer";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Fragment>
      <NavBar />
      <h1>App para calcular tu Presupuesto.</h1>

      <ItemListContainer />
    </Fragment>
  );
}

export default App;
