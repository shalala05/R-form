import React from "react";
import ReactDOM from "react-dom";
import CustomButton from "./CustomButton";
import "./index.css";

export default function App() {
  return (
    <div>
      <CustomButton text="Click Me" warnMessage="This is a warning!" hint="I'm a hint!" />
      <CustomButton text="Submit" warnMessage="Warning for Submit!" />
      <CustomButton text="Hover Over Me" hint="Only a hint!" />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));