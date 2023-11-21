import Button from "@mui/material/Button";
import { PropTypes } from "prop-types";

function PrimaryButton(props) {
  return (
    <Button variant="contained" size="medium">
      {props.text}
    </Button>
  );
}

export default PrimaryButton;

PrimaryButton.propTypes = {
  text: PropTypes.string,
};
