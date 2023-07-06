import React from "react";
import { createRoot } from "react-dom/client";
import Search from "./Search";
import Forecast from "./Forecast";

import "./Weather.css";
import "./Forecast.css";

function App() {
  return (
    <div className="App">
      <Search />
      <Forecast />
    </div>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
