import MuiButton from "@mui/material/Button";
import { PropTypes } from "prop-types";
import { Link } from "react-router-dom";

function Button(props) {
  const handleClick = () => {
    if (props.onClick) {
      props.onClick();
    }
  };

  const button = (
    <MuiButton
      disabled={props.disabled}
      variant="contained"
      size="large"
      onClick={handleClick}
    >
      {props.text}
    </MuiButton>
  );
  if (props.link && !props.disabled) {
    return <Link to={props.link}>{button}</Link>;
  }
  return button;
}
export default Button;

Button.propTypes = {
  disabled: PropTypes.bool,
  text: PropTypes.string,
  onClick: PropTypes.func,
  link: PropTypes.string,
};
