import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Results from "./components/Results.jsx";
import FlagRoute from "./components/FlagRoute";

const root = document.getElementById("root");
ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route index element={<App />} />
        <Route path="/results" element={<Results />} />
        <Route path="/flagRoute/:countryCode" element={<FlagRoute />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
