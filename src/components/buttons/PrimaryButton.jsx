import Button from "@mui/material/Button";
import { PropTypes } from "prop-types";
import { Link } from "react-router-dom";

function PrimaryButton(props) {
  const handleClick = () => {
    if (props.onClick) {
      props.onClick();
    }
  };

  return (
    <Link to={props.link}>
      <Button variant="contained" size="medium" onClick={handleClick}>
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
  onClick: PropTypes.func,
  link: PropTypes.string,
};
