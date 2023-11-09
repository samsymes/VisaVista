import { PropTypes } from "prop-types";

function Button(props) {
  return <button className="btn btn-primary">{props.text}</button>;
}

Button.propTypes = {
  text: PropTypes.string,
};
export default Button;
