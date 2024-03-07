import PropTypes from "prop-types";
function Flag(props) {
  if (props.code) {
    const flagURL = `https://flagcdn.com/h120/${props.code}.jpg`;

    return (
      <>
        <img id="flag" src={flagURL} alt={props.code} />
      </>
    );
  }

  return null;
}

Flag.propTypes = {
  code: PropTypes.string,
  onCountryChange: PropTypes.func,
};

export default Flag;
