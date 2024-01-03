import PropTypes from "prop-types";
function Flag(props) {
  if (props.code) {
    const flagURL = `https://flagcdn.com/h120/${props.code}.jpg`;

    return (
      <>
        <h5 className="card-title">{props.name}</h5>
        <img id="flag" src={flagURL} alt={props.code} />
      </>
    );
  }

  return null;
}

Flag.propTypes = {
  name: PropTypes.string,
  code: PropTypes.string,
  onCountryChange: PropTypes.func,
};

export default Flag;
