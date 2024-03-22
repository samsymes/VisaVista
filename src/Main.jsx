import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./Routes/App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import Results from "./Routes/Results.jsx";
import Flights from "./Routes/Flights.jsx";
import About from "./Routes/About.jsx";
import "./main.css";

const root = document.getElementById("root");
ReactDOM.createRoot(root).render(
  <>
    <BrowserRouter baseName={import.meta.env.DEV ? "/" : "/VisaVista/"}>
      <Routes>
        <Route path="/" index element={<App />} />
        <Route path="/Results" element={<Results />} />
        <Route path="/Flights" element={<Flights />} />
        <Route path="/About" element={<About />} />
      </Routes>
    </BrowserRouter>
  </>
);
