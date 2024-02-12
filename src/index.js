import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router } from 'react-router-dom';
import { NewsProvider } from "./ContextData";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
      <NewsProvider>
        <Router>
          <App />
        </Router>
      </NewsProvider>
  </React.StrictMode>
);

reportWebVitals();
