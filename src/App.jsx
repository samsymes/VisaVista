import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Card from "./components/Cards/Card";
import { useState, useEffect } from "react";
import ComboBox from "./components/ComboBox";

import "./App.css";

function App() {
  // fetched countries
  const [countryList, setCountryList] = useState([]);

  // origin country selectd from combobox
  const [originCountry, setOriginCountry] = useState("");
  console.log("Origin Country", originCountry);
  const handelOriginChange = (event) => {
    setOriginCountry(event.target.value);
  };

  // destination country selected from combobox
  const [destinationCountry, setDestinationCountry] = useState("");
  console.log("Destination Country", destinationCountry);
  const handelDestinationChange = (event) => {
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
          <ComboBox
            countryList={countryList}
            selectedCountry={originCountry}
            handelCountryChange={handelOriginChange}
            message="Origin Country"
            isOptionEqualToValue={(option, value) => option.value === value}
          ></ComboBox>
          <Card
            country={countryList.find(
              (country) => country.value === originCountry
            )}
            image={originCountry}
          />
        </div>
        <div className="col">
          <ComboBox
            countryList={countryList}
            selectedCountry={destinationCountry}
            handelCountryChange={handelDestinationChange}
            message="Destination Country"
          ></ComboBox>
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
