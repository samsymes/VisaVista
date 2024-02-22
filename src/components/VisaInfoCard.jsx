import PropTypes from "prop-types";
import Card from "./Card";

function VisaInfoCard(props) {
  return (
    <div className="visaCard">
      <Card className="infoCard">
        <div className="infoCardContents">
          <h4>Visa Info</h4>
          <b>Visa Requirements: </b>
          {props.visaRequirements} <br />
          <b>Allowed Stay: </b> {props.allowedStay} <br />
          <b>Notes: </b> {props.notes}
        </div>
      </Card>
    </div>
  );
}
export default VisaInfoCard;

VisaInfoCard.propTypes = {
  visaRequirements: PropTypes.string,
  allowedStay: PropTypes.string,
  notes: PropTypes.string,
};
