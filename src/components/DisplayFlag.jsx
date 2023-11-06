import PropTypes from "prop-types";
import canada from "../images/canada.png";
import usa from "../images/usa.png";
import mexico from "../images/mexico.png";

DisplayFlag.propTypes = {
  selectedCountry: PropTypes.string.isRequired,
};
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
      className="countryFlag"
      id="flag"
      alt={selectedCountry}
    />
  );
}

export default DisplayFlag;
