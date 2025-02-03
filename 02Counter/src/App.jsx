import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(5);

  //let counter = 5;
  const addValue = () => {
    counter = counter + 1;
    setCounter(counter);
    console.log(`Current counter value: ${counter}`);
  };

  const removeValue = () => {
    counter = counter - 1;
    setCounter(counter);
    console.log(`Current counter value: ${counter}`);
  };

  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter Value: {counter}</h2>

      <button onClick={addValue}>Add Value : {counter}</button>
      <br />
      <button onClick={removeValue}>Remove Value : {counter}</button>
      <p>footer: {counter}</p>
    </>
  );
}

export default App;

//need to complete the assignment given by Hitesh for implementing check like counter should not decrese from 0 nd increase from 20
