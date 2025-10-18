import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { ButtonProvider } from "../src/context/ButtonContext.jsx";
import { WishlistProvider } from "../src/context/WishlistContext.jsx";
import { DetailsProvider } from "../src/context/DetailsContext.jsx";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <DetailsProvider>
      <WishlistProvider>
        <ButtonProvider>
          <App />
        </ButtonProvider>
      </WishlistProvider>
    </DetailsProvider>
  </React.StrictMode>
);
