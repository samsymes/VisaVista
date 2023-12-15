// **potential data**

// passort power index data
// https://www.kaggle.com/datasets/kometr/passport-power-visa-free-access-in-2023

// CDC travelers health informatin page NOT API
//https://wwwnc.cdc.gov/travel/destinations/traveler/none/bhutan?s_cid=ncezid-dgmq-travel-single-001

// Amadeus API - Tours and Activities, Hotels, Cars, Flights, etc.
//https://developers.amadeus.com/self-service/category/destination-experiences/api-doc/tours-and-activities

import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Card from "./components/Cards/Card";
import { useState, useEffect } from "react";
import ComboBox from "./components/selects/ComboBox";
import "./App.css";
import Button from "./components/buttons/Button";
import Flag from "./components/Flag";
import VisaRequirementsService from "./services/VisaRequirementsService";

function App() {
  const [countryList, setCountryList] = useState([]);
  // selections {
  const [originCountry, setOriginCountry] = useState("");
  console.log("Origin Country", originCountry);
  const handleOriginChange = (newCountry) => {
    setOriginCountry(newCountry.value);
    setIsOriginCountrySelected(true);
  };

  const [destinationCountry, setDestinationCountry] = useState("");
  console.log("Destination Country", destinationCountry);
  const handleDestinationChange = (newCountry) => {
    setDestinationCountry(newCountry.value);
  };
  // }
  // visaservice {
  const visaService = VisaRequirementsService;
  const originCountryCodes = visaService.getOriginCountries();
  console.log("Origin Country Codes", originCountryCodes);

  const originCountryList = countryList.filter((country) =>
    originCountryCodes.includes(country.value)
  );
  console.log("Origin Country List", originCountryList);

  const destinationCountryCodes =
    visaService.getDestinationCountries(originCountry);

  console.log("Destination Country Codes", destinationCountryCodes);

  const destinationCountryList = countryList.filter((country) =>
    destinationCountryCodes.includes(country.value)
  );

  console.log("Destination Country List", destinationCountryList);
  // }

  // flag{
  useEffect(() => {
    async function fetchData() {
      const response = await fetch("https://flagcdn.com/en/codes.json");
      const countryData = await response.json();
      const countryList = Object.entries(countryData).map(([value, label]) => ({
        value,
        label,
      }));
      setCountryList(countryList);
      console.log("All Countries", countryList);
    }
    fetchData();
  }, []);
  // }

  // disabled components {
  const [isOriginCountrySelected, setIsOriginCountrySelected] = useState(false);
  const [buttonDisabled, setButtonDisabled] = useState(true);
  useEffect(() => {
    if (originCountry && destinationCountry) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [originCountry, destinationCountry]);
  // }

  return (
    <>
      <div>
        <Navbar />
        <Header />
      </div>
      <div className="row">
        <div className="col">
          <Card
            // flag img
            option={originCountryList.find(
              (country) => country.value === originCountry
            )}
          >
            <ComboBox
              options={originCountryList}
              selectedOption={originCountry}
              handleChange={handleOriginChange}
              tag="Origin Country"
            />
            <Flag
              title={
                originCountry
                  ? originCountryList.find(
                      (country) => country.value === originCountry
                    )?.label
                  : null
              }
              code={originCountry}
            />
          </Card>
        </div>
        <div className="col">
          {isOriginCountrySelected && (
            <Card
              option={destinationCountryList.find(
                (country) => country.value === destinationCountry
              )}
            >
              <ComboBox
                options={destinationCountryList}
                selectedOption={destinationCountry}
                handleChange={handleDestinationChange}
                tag="Destination Country"
              />
              <Flag
                title={
                  destinationCountry
                    ? destinationCountryList.find(
                        (country) => country.value === destinationCountry
                      )?.label
                    : null
                }
                code={destinationCountry}
              />
            </Card>
          )}
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
