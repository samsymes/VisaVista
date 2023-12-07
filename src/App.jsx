// **potential data**

// passort power index data
// https://www.kaggle.com/datasets/kometr/passport-power-visa-free-access-in-2023
// https://www.kaggle.com/datasets/ramjasmaurya/henley-passport-index20062022

// CDC travelers health informatin page NOT API
//https://wwwnc.cdc.gov/travel/destinations/traveler/none/bhutan?s_cid=ncezid-dgmq-travel-single-001

import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Card from "./components/Cards/Card";
import { useState, useEffect } from "react";
import ComboBox from "./components/selects/ComboBox";
import "./App.css";
import Button from "./components/buttons/Button";
import Flag from "./components/Flag";
import VisaRequirementsService from "./services/visa-requirments-service";

function App() {
  // fetched countries
  const [countryList, setCountryList] = useState([]);

  // origin country selectd from combobox
  const [originCountry, setOriginCountry] = useState("");
  console.log("Origin Country", originCountry);
  const handleOriginChange = (newCountry) => {
    setOriginCountry(newCountry.value);
  };

  // destination country selected from combobox
  const [destinationCountry, setDestinationCountry] = useState("");
  console.log("Destination Country", destinationCountry);
  const handleDestinationChange = (newCountry) => {
    setDestinationCountry(newCountry.value);
  };

  // enable button when origin and destination countries are selected, disable click event otherwise
  const [buttonDisabled, setButtonDisabled] = useState(true);
  useEffect(() => {
    if (originCountry && destinationCountry) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [originCountry, destinationCountry]);

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

  const originCountryCodes = VisaRequirementsService.getOriginCountries();
  const destinationCountryCodes =
    VisaRequirementsService.getDestinationCountries();

  const originCountries = countryList.filter((country) =>
    originCountryCodes.includes(country.value)
  );
  const destinationCountries = countryList.filter((country) =>
    destinationCountryCodes.includes(country.value)
  );

  return (
    <>
      <div>
        <Navbar />
        <Header />
      </div>
      <div className="row">
        <div className="col">
          <Card
            option={originCountries.find(
              (country) => country.value === originCountry
            )}
          >
            <ComboBox
              options={originCountries}
              selectedOption={originCountry}
              handleChange={handleOriginChange}
              tag="Origin Country"
            />
            <Flag
              title={
                originCountry
                  ? `${
                      originCountries.find(
                        (country) => country.value === originCountry
                      ).label
                    }`
                  : null
              }
              code={originCountry}
            />
          </Card>
        </div>
        <div className="col">
          <Card
            option={destinationCountries.find(
              (country) => country.value === destinationCountry
            )}
          >
            <ComboBox
              options={destinationCountries}
              selectedOption={destinationCountry}
              handleChange={handleDestinationChange}
              tag="Destination Country"
            />
            <Flag
              title={
                destinationCountry
                  ? `${
                      destinationCountries.find(
                        (country) => country.value === destinationCountry
                      ).label
                    }`
                  : null
              }
              code={destinationCountry}
            />
          </Card>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <Button
            disabled={buttonDisabled}
            text="Search"
            originCode={originCountry}
            destinationCode={destinationCountry}
            link={`/results/?From=${originCountry}&To=${destinationCountry}`}
          />
        </div>
      </div>
    </>
  );
}
export default App;
