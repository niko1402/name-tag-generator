import React from "react";
import ReactDOM from "react-dom";
import NameTag from "./NameTag.js";
import { names } from "./data.js";
import "./styles.css";

// Write a callback function that will accept a name a return a NameTag component.
// NameTag component needs to have a 'name' and 'key' prop.
const renderNameTag = (name) => <NameTag name={name.person} key={name.id} />;

// Use an explicit return because there is an expression and a callback function
const App = () => {
  // Map over array of name, using renderNameTag callback function. Save result to NameTagElements
  const NameTagElements = names.map(renderNameTag);
  // Render the nametag by returning data in App component
  return (
    <div className="App">
      <h1>Name Tag Generator</h1>
      {NameTagElements}
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
