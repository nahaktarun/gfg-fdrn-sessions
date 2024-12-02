import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);

// Assignment
// localstorage -> using react. get and set
// Redux -> using props methods we can update the values such that only single point of truth.
// Context API 