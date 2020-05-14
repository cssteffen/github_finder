import React from "react"; // main library
import ReactDOM from "react-dom"; // browser
import App from "./App"; // main app

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root") //where to render
);
