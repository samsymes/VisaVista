import PropsType from "prop-types";
import Flag from "../Flag";
import PrimaryButton from "../buttons/button";
function FromCountryCard(props) {
  return (
    <div className="card" id="countryCard">
      <div className="card-body">
        <h5 className="card-title">{props.country?.label}</h5>
        <Flag image={props.image} />
      </div>
      <PrimaryButton text="Do something" />
    </div>
  );
}

FromCountryCard.propTypes = {
  country: PropsType.shape({
    value: PropsType.string,
    label: PropsType.string,
    image: PropsType.string,
  }),
  image: PropsType.string,
};

export default FromCountryCard;
