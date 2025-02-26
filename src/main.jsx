import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import MyCart from "./provider/Context";

createRoot(document.getElementById("root")).render(
  // <StrictMode>
  <MyCart>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </MyCart>
  // </StrictMode>
);
