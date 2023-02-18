import React from "react";
import Weather from "./Weather";
import "bootstrap/dist/css/bootstrap.css";

import "./App.css";

export default function App() {
  return (
    <div className="App">
      <Weather defaultCity="Kyiv" />
      <footer>
        Coded by Marianna Dei
        and open-source code on {" "}
        <a
          href=""
          target="blank"
          rel="noopener noreferrer"
          title="github-account"
          className="github-link"
        >
          {" "}
          GitHub
        </a>
      </footer>
    </div>
  );
}
