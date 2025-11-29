import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ButtonProvider } from "../src/context/ButtonContext.jsx";
import { WishlistProvider } from "../src/context/WishlistContext.jsx";
import { DetailsProvider } from "../src/context/DetailsContext.jsx";
import { Provider } from "react-redux";
import { store } from "../src/redux/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <DetailsProvider>
      <WishlistProvider>
        <ButtonProvider>
          <Provider store={store}>
            <App />
          </Provider>
        </ButtonProvider>
      </WishlistProvider>
    </DetailsProvider>
  </React.StrictMode>
);
