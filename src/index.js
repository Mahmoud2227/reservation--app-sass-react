import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import "./SassStyles/_globals.scss";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
