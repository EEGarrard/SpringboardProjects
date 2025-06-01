import { StrictMode } from "react";
import React from "react";
import { createRoot } from "react-dom/client";  // Updated import
import { Provider } from "react-redux";
import store from "./redux/store.jsx";
import "./index.css";
import App from "./App.jsx";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);  // Create a root

root.render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);