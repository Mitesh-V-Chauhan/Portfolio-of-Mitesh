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

// import React from "react";
// import ReactDOM from "react-dom/client";  // Make sure to use `react-dom/client` for React 18+
// import App from "./App";
// import { BrowserRouter as Router } from 'react-router-dom';
// import "./index.css"; 

// // Create the root element
// const root = ReactDOM.createRoot(document.getElementById("root"));

// // Render the app to the DOM
// root.render(
//   <React.StrictMode>
//     <Router basename="/My-Portfolio"> 
//       <App />
//     </Router>
//   </React.StrictMode>
// );