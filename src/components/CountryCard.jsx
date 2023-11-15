import Button from "@mui/material/Button";
import PropsType from "prop-types";
import Flag from "./Flag";
function CountryCard(props) {
  return (
    <div className="card" id="countryCard">
      <div className="card-body">
        <h5 className="card-title">{props.country?.label}</h5>
        <Flag image={props.image} />
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
    image: PropsType.string,
  }),
  label: PropsType.string,
  image: PropsType.func,
  children: PropsType.element,
};

export default CountryCard;
