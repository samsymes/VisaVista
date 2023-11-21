import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Card from "./components/Cards/Card";
import { useState, useEffect } from "react";
import ComboBox from "./components/ComboBox";
import Flag from "./components/Flag";
import "./App.css";
import PrimaryButton from "./components/buttons/PrimaryButton";

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
          <Card
            option={countryList.find(
              (country) => country.value === originCountry
            )}
          >
            <ComboBox
              options={countryList}
              selectedOption={originCountry}
              handleChange={handleOriginChange}
              tag="Origin Country"
            />
            <Flag
              title={
                originCountry
                  ? `${
                      countryList.find(
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
            option={countryList.find(
              (country) => country.value === destinationCountry
            )}
          >
            <ComboBox
              options={countryList}
              selectedOption={destinationCountry}
              handleChange={handleDestinationChange}
              tag="Destination Country"
            />
            <Flag
              title={
                destinationCountry
                  ? `${
                      countryList.find(
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
          <PrimaryButton text="Search" />
        </div>
      </div>
    </>
  );
}
export default App;
