import Navbar from "./components/Navbar";
import Header from "./components/Header";
import CountryCard from "./components/CountryCard";
import ChecklistCard from "./components/checklistCard";
import AddDocument from "./components/AddDocument";
import Select from "./components/select/select";
import { useState } from "react";

import "./App.css";

function App() {
  const [selectedCountry, setSelectedCountry] = useState("");
  const handleCountryChange = (event) => {
    setSelectedCountry(event.target.value);
  };

  return (
    <>
      <div>
        <Navbar />
        <Header />
        <Select value={selectedCountry} onChange={handleCountryChange} />
      </div>
      <div className="row">
        <CountryCard country={selectedCountry} />
        <ChecklistCard />
      </div>
      <AddDocument />
    </>
  );
}

export default App;
