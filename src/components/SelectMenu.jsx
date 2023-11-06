import { useState } from "react";
import canada from "../images/canada.png";
import usa from "../images/usa.png";
import mexico from "../images/mexico.png";

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
        return (
          <>
            <SelectOption key={country} country={country} />;
          </>
        );
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

// **connect flags**
function DisplayFlag(props) {
  const flags = {
    Canada: canada,
    USA: usa,
    Mexico: mexico,
  };

  return (
    <img
      src={flags[selectedCountry]}
      className="countryFlag"
      id="flag"
      alt={selectedCountry}
    />
  );
}

export { DisplayFlag };
export default SelectMenu;
