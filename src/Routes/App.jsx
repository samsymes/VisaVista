import Header from "../components/Header";
import Card from "../components/Card";
import { useState, useEffect } from "react";
import ComboBox from "../components/selects/ComboBox";
import "./App.css";
import Button from "../components/buttons/Button";
import Flag from "../components/Flag";
import AllCountryInfoService from "../services/AllCountryInfoService";
import CountryFlagService from "../services/CountryFlagService";
import ResponsiveDrawer from "../components/ResponsiveDrawer";

function App() {
  const [countryFlagList, setCountryFlagList] = useState([]);

  const countryInfo = AllCountryInfoService;

  const originCountryCodes =
    countryInfo.getOriginCountriesFromAllCountryInfoService();

  const filteredOrigins = countryFlagList.filter((country) =>
    originCountryCodes.includes(country.value)
  );
  filteredOrigins.sort((a, b) => a.label.localeCompare(b.label));

  const [selectedOriginCountry, setselectedOriginCountry] = useState(
    filteredOrigins[0]
  );

  useEffect(() => {
    CountryFlagService.getCountryListFromCountryFlagService().then(
      (response) => {
        setCountryFlagList(response);
        console.log("countryFlagList", response);
      }
    );
  }, []);

  const destinationCountryCodes =
    countryInfo.getDestinationCountriesFromAllCountryInfoService(
      selectedOriginCountry?.value
    );
  const filteredDestinations = countryFlagList.filter((country) =>
    destinationCountryCodes.includes(country.value)
  );
  filteredDestinations.sort((a, b) => a.label.localeCompare(b.label));

  const [selectedDestinationCountry, setselectedDestinationCountry] = useState(
    filteredDestinations[0]
  );
  const handleOriginChange = (newCountry) => {
    if (newCountry) {
      setselectedDestinationCountry(null);
      setselectedOriginCountry(newCountry);
      setIsOriginCountrySelected(true);
      console.log("setisorigincountryselected to true");
    } else {
      setselectedOriginCountry(null);
      setselectedDestinationCountry(null);
      setIsOriginCountrySelected(false);

      console.log("setisorigincountryselected to false");
    }
  };

  const handleDestinationChange = (newCountry) => {
    if (newCountry) {
      setselectedDestinationCountry(newCountry);
    } else {
      setselectedDestinationCountry(null);
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
      <ResponsiveDrawer
        homePath="./VisaVista"
        flightPath="/VisaVista/flights"
        resultsPath="disabled"
        aboutPath="./VisaVista/About"
        gitHubPath="https://github.com/samsymes"
        linkedInPath="https://www.linkedin.com/in/samanthasymes/"
        emailPath="mailto:samasymes@gmail.com"
      >
        <div className="appContainer ">
          <Header />

          <Card className="countryCard" id="originSelect">
            <div className="cardContent">
              <ComboBox
                options={filteredOrigins}
                value={selectedOriginCountry}
                onChange={handleOriginChange}
                tag="Origin Country"
              />
              <br />

              <Flag
                name={
                  selectedOriginCountry
                    ? filteredOrigins.find(
                        (country) =>
                          country.value === selectedOriginCountry.value
                      )?.label
                    : null
                }
                code={selectedOriginCountry?.value}
                onCountryChange={handleOriginChange}
              />
            </div>
          </Card>

          <Card className="countryCard" id="destinationSelect">
            <div className="cardContent">
              <ComboBox
                options={filteredDestinations}
                value={selectedDestinationCountry}
                onChange={handleDestinationChange}
                disabled={!isOriginCountrySelected ? true : false}
                tag="Destination Country"
              />
              <br />

              <Flag
                name={
                  selectedDestinationCountry
                    ? filteredDestinations.find(
                        (country) =>
                          country.value === selectedDestinationCountry.value
                      )?.label
                    : null
                }
                code={selectedDestinationCountry?.value}
                onCountryChange={handleDestinationChange}
              />
            </div>
          </Card>

          <div className="searchButton">
            <Button
              id="searchButton"
              color="success"
              disabled={buttonDisabled}
              text="Search"
              originCode={selectedOriginCountry?.value}
              destinationCode={selectedDestinationCountry?.value}
              onClick={() => {
                window.location.href = `/VisaVista/results/?From=${selectedOriginCountry.value}&To=${selectedDestinationCountry.value}`;
              }}
            />
          </div>
        </div>
      </ResponsiveDrawer>
    </>
  );
}
export default App;
