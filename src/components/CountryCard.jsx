import Button from "./Button";
import PropsType from "prop-types";
import Flag from "./Flag";

function CountryCard(props) {
  return (
    <div className="card" id="countryCard">
      <div className="card-body">
        <h5 className="card-title">{props.countryName}</h5>
        <Flag country={props.selectedCountry} />
        <p className="card-text">visa requirements for your chosen country</p>
      </div>
      <Button text="Do Something" />
    </div>
  );
}

CountryCard.propTypes = {
  selectedCountry: PropsType.string,
  countryName: PropsType.string,
};

export default CountryCard;
