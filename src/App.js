import React from "react";
import Weather from "./Weather";

import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="London" />
        <footer>
          <a
            href="https://github.com/anninool/react-weather-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Open-source code
          </a>{" "}
          {""}
          by Anni Nool
        </footer>
      </div>
    </div>
  );
}
