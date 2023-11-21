import PropTypes from "prop-types";

function Flag(props) {
  if (props.code) {
    const flagURL = `https://flagcdn.com/w160/${props.code}.png`;

    return <img src={flagURL} alt={props.code} />;
  }

  return null;
}

Flag.propTypes = {
  code: PropTypes.string,
};

export default Flag;
