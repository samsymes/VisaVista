import Navbar from "./Navbar";
import PropTypes from "prop-types";
function Results(props) {
  return (
    <>
      <Navbar />

      <div>
        <h2>Results Page</h2>
        <p>Origin Code: {props.originCountry}</p>
        <p>Destination Code: {props.destinationCountry}</p>
      </div>
    </>
  );
}

Results.propTypes = {
  originCountry: PropTypes.string,
  destinationCountry: PropTypes.string,
};

export default Results;
