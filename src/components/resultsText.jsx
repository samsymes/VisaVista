import { PropTypes } from "prop-types";

function Text(props) {
  return (
    <div>
      <p>{props.text}</p>
    </div>
  );
}

Text.propTypes = {
  text: PropTypes.string,
};
export default Text;
