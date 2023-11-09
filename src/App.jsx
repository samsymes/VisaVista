import Navbar from "./components/Navbar";
import Header from "./components/Header";
import CountryCard from "./components/CountryCard";
import ChecklistCard from "./components/checklistCard";
import AddDocument from "./components/AddDocument";
import Select from "./components/select/select";
import { useState, useEffect } from "react";
import canada from "./images/canada.png";
import usa from "./images/usa.png";
import mexico from "./images/mexico.png";

import "./App.css";

function App() {
  const [selectedCountry, setSelectedCountry] = useState(0);

  const handleCountryChange = (event) => {
    setSelectedCountry(event.target.value);
  };

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("https://flagcdn.com/en/codes.json");
      const countryList = response.json();
      console.log(countryList);
    }
    fetchData();
  });

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
      </div>
      <div className="row">
        <CountryCard
          label={countries[selectedCountry].label}
          image={countries[selectedCountry].image}
        />

        <ChecklistCard />
      </div>
      <AddDocument />
    </>
  );
}
export default App;
