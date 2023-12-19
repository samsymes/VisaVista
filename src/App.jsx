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
import VisaReqService from "./services/VisaReqService";

function App() {
  const [apiFlagList, setapiFlagList] = useState([]);
  // selections {
  const [selectedOriginCountry, setselectedOriginCountry] = useState("");
  console.log("Origin Country", selectedOriginCountry);
  const handleOriginChange = (newCountry) => {
    setselectedOriginCountry(newCountry.value);
    setIsOriginCountrySelected(true);
  };

  const [selectedDestinationCountry, setselectedDestinationCountry] =
    useState("");
  console.log("Destination Country", selectedDestinationCountry);
  const handleDestinationChange = (newCountry) => {
    setselectedDestinationCountry(newCountry.value);
  };
  // }
  // visaservice {
  const visaService = VisaReqService;
  const originCountryCodes = visaService.getOriginCountries();
  const filteredOrigins = apiFlagList.filter((country) =>
    originCountryCodes.includes(country.value)
  );
  filteredOrigins.sort((a, b) => a.label.localeCompare(b.label));
  const destinationCountryCodes = visaService.getDestinationCountries(
    selectedOriginCountry
  );

  const filteredDestinations = apiFlagList.filter((country) =>
    destinationCountryCodes.includes(country.value)
  );
  filteredDestinations.sort((a, b) => a.label.localeCompare(b.label));

  //  move to service
  useEffect(() => {
    async function fetchData() {
      const response = await fetch("https://flagcdn.com/en/codes.json");
      const countryData = await response.json();
      const apiFlagList = Object.entries(countryData).map(([value, label]) => ({
        value,
        label,
      }));
      setapiFlagList(apiFlagList);
      console.log("All Countries", apiFlagList);
    }
    fetchData();
  }, []);
  // }
  const [isOriginCountrySelected, setIsOriginCountrySelected] = useState(false);
  const [buttonDisabled, setButtonDisabled] = useState(true);
  useEffect(() => {
    if (selectedOriginCountry && selectedDestinationCountry) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [selectedOriginCountry, selectedDestinationCountry]);
  return (
    <>
      <div>
        <Navbar />
        <Header />
      </div>
      <div className="row">
        <div className="col">
          <Card>
            <ComboBox
              options={filteredOrigins}
              selectedOption={selectedOriginCountry}
              handleChange={handleOriginChange}
              tag="Origin Country"
            />
            <Flag
              name={
                selectedOriginCountry
                  ? filteredOrigins.find(
                      (country) => country.value === selectedOriginCountry
                    )?.label
                  : null
              }
              code={selectedOriginCountry}
            />
          </Card>
        </div>
        <div className="col">
          {isOriginCountrySelected && (
            <Card>
              <ComboBox
                options={filteredDestinations}
                selectedOption={selectedDestinationCountry}
                handleChange={handleDestinationChange}
                tag="Destination Country"
              />
              <Flag
                name={
                  selectedDestinationCountry
                    ? filteredDestinations.find(
                        (country) =>
                          country.value === selectedDestinationCountry
                      )?.label
                    : null
                }
                code={selectedDestinationCountry}
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
            originCode={selectedOriginCountry}
            destinationCode={selectedDestinationCountry}
            link={`/results/?From=${selectedOriginCountry}&To=${selectedDestinationCountry}`}
          />
        </div>
      </div>
    </>
  );
}
export default App;
