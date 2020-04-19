import React from "react";
import ReactDOM from "react-dom";

import {EstiloGlobal} from './tema/meu_tema'
import App from "./App";

ReactDOM.render(
  <>
    <EstiloGlobal/>
    <App />
  </>,
  document.getElementById("root")
);
