import React from "react";
import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Portland" />
        <footer>
          This project was coded by{" "}
          <a
            href="https://www.linkedin.com/in/chelsea-wellman"
            target="_blank"
            rel="noreferrer"
          >
            Chelsea Wellman
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/cnwellman/react-weather-app"
            target="_blank"
            rel="noreferrer"
          >
            open-sourced on GitHub.
          </a>
        </footer>
      </div>
    </div>
  );
}
