import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import Other from "./other.jsx";

function Render() {
  return <h3> I am rendering the element !! </h3>;
}

// const reactElement = {
//   type: "a",
//   props: {
//     href: "https://google.com",
//     target: "_blank",
//   },
//   children: "Click me to visit google",
// };

const anotherElement = (
  <a href="https://google.com" target="_blank">
    Visit Google
  </a>
);

//createRoot(document.getElementById("root")).render(anotherElement);

const globalVar = "The Global Variable !!";

// const reactElement = React.createElement(
//   "a",
//   {
//     href: "https://google.com",
//     target: "_blank",
//   },
//   "Click me to visit google!",
//   globalVar
// );

// createRoot(document.getElementById("root")).render(
//   <>
//     <App /> <Other />
//   </>
// );

// createRoot(document.getElementById("root")).render(
//   <StrictMode>
//     <App />
//   </StrictMode>
// );

createRoot(document.getElementById("root")).render(reactElement);

//createRoot(document.getElementById("root")).render(<App />);
