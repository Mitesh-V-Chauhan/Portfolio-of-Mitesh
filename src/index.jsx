import React from "react";
import ReactDOM from "react-dom";
import App from "./App"; // Make sure App.jsx is in the same folder
import { BrowserRouter as Router } from 'react-router-dom'; // If using React Router
import "./index.css"; // Optional: If you have a global CSS file

// Render the app to the DOM
ReactDOM.render(
  <React.StrictMode>
    <Router basename="/My-Portfolio"> {/* If using React Router */}
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById("root") // Ensure there's a div with id="root" in your index.html
);