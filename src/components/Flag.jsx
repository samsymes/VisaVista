import PropTypes from "prop-types";

function Flag(props) {
  const flagURL = `https://flagcdn.com/w160/${props.image}.png`;

  if (flagURL) {
    return <img src={flagURL} alt={props.image} />;
  }
  return null;
}
Flag.propTypes = {
  image: PropTypes.string,
};

export default Flag;
