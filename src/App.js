import React, { Fragment } from "react";

function App() {
  return (
    <Fragment>
      <h1>App para calcular tu Presupuesto.</h1>
      <p>
        Mi idea para el proyecto es hacer una APP, en la que ingreses tu
        presupuesto actual (ej, $5000) y vayas agregando tus gastos. Los gastos
        que vayas haciendo se mostrarían a la derecha como una lista.
      </p>
      <p>
        También se mostraría el presupuesto ingresado y debajo, el presupuesto
        restante (prespuesto inicial - gastos ingresados)
      </p>
    </Fragment>
  );
}

export default App;
