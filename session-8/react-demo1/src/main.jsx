import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App></App>
  </StrictMode>
);

// import React from "react";
// import ReactDOM from "react-dom";

// function App() {
//   const heading = React.createElement(
//     "h1",
//     { id: "heading1" },
//     "Hello Hi there"
//   );

//   return React.createElement("div", null, heading);
// }

// ReactDOM.render(React.createElement(App), document.getElementById("root"));
