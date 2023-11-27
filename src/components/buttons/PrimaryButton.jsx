import Button from "@mui/material/Button";
import { PropTypes } from "prop-types";
import { Link } from "react-router-dom";

function PrimaryButton(props) {
  const destinationRoute = `/destination/${props.originCode}/${props.destinationCode}`;

  return (
    <Link to={destinationRoute}>
      <Button variant="contained" size="medium">
        {props.text}
      </Button>
    </Link>
  );
}

export default PrimaryButton;

PrimaryButton.propTypes = {
  text: PropTypes.string,
  originCode: PropTypes.string,
  destinationCode: PropTypes.string,
};
