import Navbar from "./components/Navbar";
import Header from "./components/Header";
import CountryCard from "./components/CountryCard";
import ChecklistCard from "./components/checklistCard";
import AddDocument from "./components/AddDocument";
import Select from "./components/select/select";
import { useState, useEffect } from "react";

import "./App.css";

function App() {
  // countries from fetch
  const [countryList, setCountryList] = useState([]);

  // country selected from dropdown
  const [selectedCountry, setSelectedCountry] = useState("");

  const handleCountryChange = (event) => {
    setSelectedCountry(event.target.value);
  };

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("https://flagcdn.com/en/codes.json");
      const countryData = await response.json();
      // convert countryData object into an array of objects
      const countryList = Object.entries(countryData).map(([value, label]) => ({
        value,
        label,
      }));
      setCountryList(countryList);
      console.log(countryList);
    }
    fetchData();
  }, []);

  return (
    <>
      <div>
        <Navbar />
        <Header />
        <Select
          value={selectedCountry}
          onChange={handleCountryChange}
          options={countryList}
        />
      </div>
      <div className="row">
        <CountryCard
          label={selectedCountry}
          image={`https://flagcdn.com/w160/${selectedCountry}.png`}
        />

        <ChecklistCard />
      </div>
      <AddDocument />
    </>
  );
}
export default App;
