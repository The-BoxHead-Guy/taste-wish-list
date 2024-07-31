import React from "react";
import ReactDOM from "react-dom/client";

// Styles
import "./assets/styles/app.css";

// Top level component
import App from "./app.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
