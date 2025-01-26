import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import Other from "./other.jsx";

createRoot(document.getElementById("root")).render(
  <>
    <App /> <Other />
  </>
);

// createRoot(document.getElementById("root")).render(
//   <StrictMode>
//     <App />
//   </StrictMode>
// );
