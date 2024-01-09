// **potential data**

// passort power index data
// https://www.kaggle.com/datasets/kometr/passport-power-visa-free-access-in-2023

// CDC travelers health informatin page NOT API
//https://wwwnc.cdc.gov/travel/destinations/traveler/none/bhutan?s_cid=ncezid-dgmq-travel-single-001

// Amadeus API - Tours and Activities, Hotels, Cars, Flights, etc.
//https://developers.amadeus.com/self-service/category/destination-experiences/api-doc/tours-and-activities

import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Card from "../components/Cards/Card";
import { useState, useEffect } from "react";
import ComboBox from "../components/selects/ComboBox";
import "./App.css";
import Button from "../components/buttons/Button";
import Flag from "../components/Flag";
import VisaReqService from "../services/VisaReqService";
import CountryService from "../services/CountryService";

function App() {
  const [apiFlagList, setapiFlagList] = useState([]);

  const visaService = VisaReqService;

  const originCountryCodes = visaService.getOriginCountries();

  const filteredOrigins = apiFlagList.filter((country) =>
    originCountryCodes.includes(country.value)
  );
  filteredOrigins.sort((a, b) => a.label.localeCompare(b.label));

  useEffect(() => {
    const fetchCountries = async () => {
      const countries = await CountryService();
      setapiFlagList(countries);
    };

    fetchCountries();
  }, []);

  const [selectedOriginCountry, setselectedOriginCountry] = useState(
    filteredOrigins[0]
  );

  const destinationCountryCodes = visaService.getDestinationCountries(
    selectedOriginCountry
  );
  const filteredDestinations = apiFlagList.filter((country) =>
    destinationCountryCodes.includes(country.value)
  );
  filteredDestinations.sort((a, b) => a.label.localeCompare(b.label));

  const [selectedDestinationCountry, setselectedDestinationCountry] = useState(
    filteredDestinations[0]
  );
  const handleOriginChange = (newCountry) => {
    if (newCountry) {
      setselectedDestinationCountry(null);
      setselectedOriginCountry(newCountry.value);
      setIsOriginCountrySelected(true);
      console.log("setisorigincountryselected to true");
    } else {
      setselectedOriginCountry(null);
      setselectedDestinationCountry(null);

      console.log("setisorigincountryselected to false");
    }
  };

  const handleDestinationChange = (newCountry) => {
    if (newCountry) {
      setselectedDestinationCountry(newCountry.value);
    } else {
      setselectedDestinationCountry(null);
      return null;
    }
  };

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
          <Card id="card">
            <ComboBox
              options={filteredOrigins}
              value={selectedOriginCountry}
              onChange={handleOriginChange}
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
              onCountryChange={handleOriginChange}
            />
          </Card>
        </div>
        <div className="col">
          {isOriginCountrySelected && (
            <Card id="card">
              <ComboBox
                options={filteredDestinations}
                value={selectedDestinationCountry}
                onChange={handleDestinationChange}
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
                onCountryChange={handleDestinationChange}
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
