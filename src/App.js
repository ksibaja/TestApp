import React from "react";
import logo from "./logo.svg";
import "./App.css";

const item = {
  url: "http://www.google.com",
  class: "button",
  content: "TestButton",
  target: "_blank"
};

const Button = param => (
  <a href={param.url} target={param.target} className={param.class}>
    {param.content}
  </a>
);

function App() {
  var name = <p>Hello I'm TWIN</p>;
  var age = 22;

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* Button way 1 */}
        {Button(item)}

        {/* Button way 2 */}
        <Button
          url="http://www.google.com"
          target="_blank"
          class="button"
          content="Button2"
        />
        {name}
        <p>
          I'm {age} years old...
        </p>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
