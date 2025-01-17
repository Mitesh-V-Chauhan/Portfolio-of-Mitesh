import React from "react";
import ReactDOM from "react-dom";
import App from "./App"; 
import { BrowserRouter as Router } from 'react-router-dom'; 
import "./index.css"; 

// Render the app to the DOM
ReactDOM.render(
  <React.StrictMode>
    <Router basename="/My-Portfolio"> 
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById("root") 
);