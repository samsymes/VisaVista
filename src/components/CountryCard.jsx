import Button from "@mui/material/Button";
import PropsType from "prop-types";

function CountryCard(props) {
  return (
    <div className="card" id="countryCard">
      <div className="card-body">
        <h5 className="card-title">{props.label}</h5>
        <img src={props.image} alt={props.label} />
        <p className="card-text">visa requirements for your chosen country</p>
      </div>
      <Button variant="contained" size="medium">
        Do something
      </Button>
    </div>
  );
}

CountryCard.propTypes = {
  label: PropsType.string,
  image: PropsType.string,
};

export default CountryCard;
