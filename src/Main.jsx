import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./Routes/App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import Results from "./Routes/Results.jsx";
import Flights from "./Routes/Flights.jsx";
import About from "./Routes/About.jsx";
import "./main.css";
const root = document.getElementById("root");
ReactDOM.createRoot(root).render(
  <>
    <Router>
      <Routes>
        <Route path="/VisaVista" index element={<App />} />
        <Route path="/VisaVista/Results" element={<Results />} />
        <Route path="/VisaVista/Flights" element={<Flights />} />
        <Route path="VisaVista/About" element={<About />} />
      </Routes>
    </Router>
  </>
);
