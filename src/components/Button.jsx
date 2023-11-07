import { propTypes } from "prop-types";

function Button(props) {
  return <button className="btn btn-primary">{props.text}</button>;
}

Button.propTypes = {
  text: propTypes.string,
};
export default Button;
