import Header from "../components/Header";
import Card from "../components/Card";
import { useState, useEffect } from "react";
import ComboBox from "../components/ComboBox";
import "./App.css";
import Button from "../components/buttons/Button";
import Flag from "../components/Flag";
import AllCountryInfoService from "../services/AllCountryInfoService";
import CountryFlagService from "../services/CountryFlagService";
import ResponsiveDrawer from "../components/ResponsiveDrawer";

function App() {
  const [countryFlagList, setCountryFlagList] = useState([]);

  const countryInfo = AllCountryInfoService;

  const passportCountryCodes = countryInfo.getPassportCountries();

  const filteredPassports = countryFlagList.filter((country) =>
    passportCountryCodes.includes(country.value)
  );
  filteredPassports.sort((a, b) => a.label.localeCompare(b.label));

  const [selectedPassportCountry, setselectedPassportCountry] = useState(
    filteredPassports[0]
  );

  useEffect(() => {
    CountryFlagService.getCountryList().then((response) => {
      setCountryFlagList(response);
    });
  }, []);

  const destinationCountryCodes = countryInfo.getDestinationCountries(
    selectedPassportCountry?.value
  );
  const filteredDestinations = countryFlagList.filter((country) =>
    destinationCountryCodes.includes(country.value)
  );
  filteredDestinations.sort((a, b) => a.label.localeCompare(b.label));

  const [selectedDestinationCountry, setselectedDestinationCountry] = useState(
    filteredDestinations[0]
  );
  const handlePassportChange = (newCountry) => {
    if (newCountry) {
      setselectedDestinationCountry(null);
      setselectedPassportCountry(newCountry);
      setPassportSelected(true);
    } else {
      setselectedPassportCountry(null);
      setselectedDestinationCountry(null);
      setPassportSelected(false);
    }
  };

  const handleDestinationChange = (newCountry) => {
    if (newCountry) {
      setselectedDestinationCountry(newCountry);
    } else {
      setselectedDestinationCountry(null);
    }
  };

  const [passportSelected, setPassportSelected] = useState(false);
  const [buttonDisabled, setButtonDisabled] = useState(true);

  useEffect(() => {
    if (selectedPassportCountry && selectedDestinationCountry) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [selectedPassportCountry, selectedDestinationCountry]);

  return (
    <>
      <ResponsiveDrawer
        From={selectedPassportCountry?.value}
        To={selectedDestinationCountry?.value}
        isactive={true}
      >
        <div className="appContainer ">
          <Header />
          <Card className="countryCard" id="passportSelect">
            <ComboBox
              options={filteredPassports}
              value={selectedPassportCountry}
              onChange={handlePassportChange}
              tag="Select Passport"
            />

            <br />

            <Flag
              code={selectedPassportCountry?.value}
              onCountryChange={handlePassportChange}
            />
          </Card>

          <Card className="countryCard" id="destinationSelect">
            <ComboBox
              options={filteredDestinations}
              value={selectedDestinationCountry}
              onChange={handleDestinationChange}
              disabled={!passportSelected ? true : false}
              tag="Select Destination"
            />
            <br />

            <Flag
              code={selectedDestinationCountry?.value}
              onCountryChange={handleDestinationChange}
            />
          </Card>

          <div className="searchButton">
            <Button
              id="searchButton"
              color="success"
              disabled={buttonDisabled}
              text="Tell me what I need to know"
              passportCode={selectedPassportCountry?.value}
              destinationCode={selectedDestinationCountry?.value}
              link={`/Results/?From=${selectedPassportCountry?.value}&To=${selectedDestinationCountry?.value}`}
            />
          </div>
        </div>
      </ResponsiveDrawer>
    </>
  );
}
export default App;
