import Navbar from "./components/Navbar";
import Header from "./components/Header";
import CountryCard from "./components/CountryCard";
import ChecklistCard from "./components/checklistCard";
import AddDocument from "./components/AddDocument";
import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import "./App.css";

function App() {
  // countries from fetch
  const [countryList, setCountryList] = useState([]);

  // country selected from dropdown
  const [selectedCountry, setSelectedCountry] = useState("");
  console.log(selectedCountry);
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
        <Box>
          <FormControl sx={{ m: 1, minWidth: 150 }}>
            <InputLabel id="demo-simple-select-label">Countries</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={selectedCountry}
              onChange={handleCountryChange}
              options={countryList}
            >
              <MenuItem value={countryList}>Select Country</MenuItem>
              {countryList.map((country) => (
                <MenuItem key={country.value} value={country.value}>
                  {country.label}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>
      </div>
      <div className="row">
        <CountryCard
          country={countryList.find(
            (country) => country.value === selectedCountry
          )}
          image={`https://flagcdn.com/w160/${selectedCountry}.png`}
        />

        <ChecklistCard />
      </div>
      <AddDocument />
    </>
  );
}
export default App;
