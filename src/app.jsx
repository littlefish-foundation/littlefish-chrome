import React from "react";
import { render } from "react-dom";

const element = <h1>Hello, world!</h1>;
console.log(element);

function App() {
  return <h1>Hello World!</h1>;
}


render (<App />, document.getElementById("react-target"));