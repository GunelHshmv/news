import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { HashRouter as Router } from 'react-router-dom';
import { NewsProvider } from "./ContextData";

ReactDOM.render(
  <React.StrictMode>
    <NewsProvider>
      <Router>
        <App />
      </Router>
    </NewsProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals(console.log);
