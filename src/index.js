import React from "react";
import ReactDOM from "react-dom";
import "tachyons";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import Myparticles from "./components/Particles/Myparticles";

ReactDOM.render(
  <div>
    <Myparticles />
    <App />
  </div>,
  document.getElementById("root")
);

if (module.hot) {
  module.hot.accept();
}
registerServiceWorker();
