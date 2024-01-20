import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { Provider } from "react-redux";
import store from "./redux/Store";  // Correct import
import { BrowserRouter } from "react-router-dom";
import { Toaster } from "react-hot-toast";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <div>
    <BrowserRouter>
      <Provider store={store}> 
        <App />
      </Provider>
      <Toaster />
    </BrowserRouter>
  </div>
);
