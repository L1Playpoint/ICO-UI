import "./index.css";
import App from "./App";
import ReactDOM from "react-dom";
import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import reportWebVitals from "./reportWebVitals";
import { register } from "./serviceWorkerRegistration";

AOS.init();

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
register();
