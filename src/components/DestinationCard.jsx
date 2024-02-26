import { Card } from "@mui/material";
import { PropTypes } from "prop-types";

function DestinationCard(props) {
  return (
    <div className="destinationCard">
      <Card className="infoCard" id="destinationInfo">
        <div className="infoCardContents">
          <h4>Destination Info</h4>
          <b>Country:</b> {props.name} <br />
          <b>Capital: </b> {props.capital} <br />
          <b>Time Zones: </b>
          {props.timeZones} <br />
          <b>Population: </b> {props.population} <br />
          <b>Languages: </b> {props.languages} <br />
          <a href={props.link}>Travel Advice</a>
        </div>
      </Card>
    </div>
  );
}

export default DestinationCard;

DestinationCard.propTypes = {
  name: PropTypes.string,
  capital: PropTypes.array,
  timeZones: PropTypes.string,
  population: PropTypes.string,
  languages: PropTypes.string,
  link: PropTypes.element,
};
