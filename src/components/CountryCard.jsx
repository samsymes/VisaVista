import Button from "@mui/material/Button";
import PropsType from "prop-types";

function CountryCard(props) {
  return (
    <div className="card" id="countryCard">
      <div className="card-body">
        <h5 className="card-title">{props.country?.label}</h5>
        <img src={props.image} alt={props.label} />
        <p className="card-text">visa requirements for your chosen country</p>
      </div>
      <Button variant="contained" size="medium">
        Do something
      </Button>
      {props.children}
    </div>
  );
}

CountryCard.propTypes = {
  country: PropsType.shape({
    value: PropsType.string,
    label: PropsType.string,
  }),
  label: PropsType.string,
  image: PropsType.string,
  children: PropsType.element,
};

export default CountryCard;
