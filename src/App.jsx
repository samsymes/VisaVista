import Navbar from "./components/Navbar";
import Header from "./components/Header";
import CountryCard from "./components/CountryCard";
import ChecklistCard from "./components/checklistCard";
import AddDocument from "./components/AddDocument";
import Select from "./components/select/select";
import { useState } from "react";
import canada from "./images/canada.png";
import usa from "./images/usa.png";
import mexico from "./images/mexico.png";

import "./App.css";

function App() {
  const [selectedCountry, setSelectedCountry] = useState(0);

  const handleCountryChange = (event) => {
    setSelectedCountry(event.target.value);
  };

  const countries = [
    { label: "Canada", value: "canada", image: canada },
    { label: "USA", value: "usa", image: usa },
    { label: "Mexico", value: "mexico", image: mexico },
  ];

  return (
    <>
      <div>
        <Navbar />
        <Header />
        <Select
          value={selectedCountry}
          onChange={handleCountryChange}
          options={countries}
        />
        <img
          src={countries[selectedCountry].image}
          alt={countries[selectedCountry].label}
        />
        ;
      </div>
      <div className="row">
        <CountryCard country={countries[selectedCountry]} />
        <ChecklistCard />
      </div>
      <AddDocument />
    </>
  );
}
export default App;
