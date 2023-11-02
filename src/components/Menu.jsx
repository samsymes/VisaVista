import { useState } from "react";
import PropTypes from "prop-types";
import canada from "../images/canada.png";
import usa from "../images/usa.png";
import mexico from "../images/mexico.png";

DisplayFlag.propTypes = {
  selectedCountry: PropTypes.string.isRequired,
};

function CountryPicker() {
  const [selectedCountry, setselectedCountry] = useState("");

  const handleCountryChange = (event) => {
    setselectedCountry(event.target.value);
  };

  return (
    <div>
      <select
        onChange={handleCountryChange}
        value={selectedCountry}
        className="menu form-select"
        aria-label="Default select example"
      >
        <option defaultValue="default">Select a country</option>
        <option value="canada">Canada</option>
        <option value="usa">United States</option>
        <option value="mexico">Mexico</option>
      </select>
      <br />
      <DisplayFlag selectedCountry={selectedCountry} />
    </div>
  );
}

function DisplayFlag(props) {
  const { selectedCountry } = props;

  const flags = {
    canada: canada,
    usa: usa,
    mexico: mexico,
  };

  return (
    <img
      src={flags[selectedCountry]}
      className="card-img-top"
      alt={selectedCountry}
      style={{ width: "100px" }}
    />
  );
}

export default CountryPicker;
