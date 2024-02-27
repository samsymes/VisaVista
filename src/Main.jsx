import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./Routes/App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Results from "./Routes/Results.jsx";
import Flights from "./Routes/Flights.jsx";
import About from "./Routes/About.jsx";

const root = document.getElementById("root");
ReactDOM.createRoot(root).render(
  <>
    <Router>
      <Routes>
        <Route path="/VisaVista" index element={<App />} />
        <Route path="/VisaVista/results" element={<Results />} />
        <Route path="/VisaVista/flights" element={<Flights />} />
        <Route path="VisaVista/about" element={<About />} />
      </Routes>
    </Router>
  </>
);
