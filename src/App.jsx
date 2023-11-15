import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Card from "./components/Cards/Card";
import { useState, useEffect } from "react";
import CustomSelect from "./components/selects/select";

import "./App.css";

function App() {
  // countries from fetch
  const [countryList, setCountryList] = useState([]);

  // country selected from dropdown
  const [originCountry, setOriginCountry] = useState("");
  console.log("Origin Country", originCountry);
  const handleOriginChange = (event) => {
    setOriginCountry(event.target.value);
  };

  const [destinationCountry, setDestinationCountry] = useState("");
  console.log("Destination Country", destinationCountry);
  const handleDestinationChange = (event) => {
    setDestinationCountry(event.target.value);
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
      console.log("All Countries", countryList);
    }
    fetchData();
  }, []);

  return (
    <>
      <div>
        <Navbar />
        <Header />
      </div>
      <div className="row">
        <div className="col">
          <CustomSelect
            countryList={countryList}
            selectedCountry={originCountry}
            handleCountryChange={handleOriginChange}
            message="Origin Country"
          />
          <Card
            country={countryList.find(
              (country) => country.value === originCountry
            )}
            image={originCountry}
          />
        </div>
        <div className="col">
          <CustomSelect
            countryList={countryList}
            selectedCountry={destinationCountry}
            handleCountryChange={handleDestinationChange}
            message="Destination Country"
          />
          <Card
            country={countryList.find(
              (country) => country.value === destinationCountry
            )}
            image={destinationCountry}
          />
        </div>
      </div>
    </>
  );
}
export default App;
