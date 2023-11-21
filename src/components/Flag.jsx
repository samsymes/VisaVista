import PropTypes from "prop-types";

function Flag(props) {
  if (props.code) {
    const flagURL = `https://flagcdn.com/h240/${props.code}.jpg`;

    return (
      <>
        <h5 className="card-title">{props.title}</h5>
        <img id="flag" src={flagURL} alt={props.code} />
      </>
    );
  }

  return null;
}

Flag.propTypes = {
  title: PropTypes.string,
  code: PropTypes.string,
};

export default Flag;
