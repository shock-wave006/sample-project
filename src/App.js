import React from "react";
import logo from "./logo.png";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="App-content">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Site is Under Devlopment.</p>
          <p>Comming soon</p>
          <div className="App-links">
            <a
              href="https://github.com/shock-wave006/sample-project"
              target="_blank"
              rel="noopener noreferrer"
              className="App-link"
            >
              Fork the repo
            </a>{" "}
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
