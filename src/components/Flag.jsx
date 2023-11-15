import PropTypes from "prop-types";

function Flag(props) {
  return <img src={`https://flagcdn.com/w160/${props.image}.png`} alt="flag" />;
}

Flag.propTypes = {
  image: PropTypes.string,
};

export default Flag;
