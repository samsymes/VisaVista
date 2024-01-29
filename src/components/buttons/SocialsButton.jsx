import IconButton from "@mui/material/IconButton";
import { PropTypes } from "prop-types";
function SocialsButton(props) {
  const button = (
    <IconButton
      href={props.href}
      color={props.color}
      aria-label={props.ariaLabel}
    >
      {props.iconElement}
    </IconButton>
  );
  return button;
}
export default SocialsButton;

SocialsButton.propTypes = {
  href: PropTypes.string,
  color: PropTypes.string,
  ariaLabel: PropTypes.string,
  iconElement: PropTypes.element,
};
