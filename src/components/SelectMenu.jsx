import { useState } from "react";

function SelectOption(props) {
  return <option>{props.country}</option>;
}

function Select(props) {
  const [selectedCountry, setselectedCountry] = useState("");

  const handleCountryChange = (event) => {
    setselectedCountry(event.target.value);
  };
  return (
    <select
      onChange={handleCountryChange}
      value={selectedCountry}
      className="menu form-select"
    >
      {props.countries.map((country) => {
        return <SelectOption key={country} country={country} />;
      })}
    </select>
  );
}

function SelectMenu() {
  const countries = ["Canada", "USA", "Mexico"];

  return (
    <div>
      <Select countries={countries} />
    </div>
  );
}

export default SelectMenu;
