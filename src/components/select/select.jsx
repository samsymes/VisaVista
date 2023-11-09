import { PropTypes } from "prop-types";

function Select(props) {
  return (
    <select value={props.value} onChange={props.onChange}>
      {props.options.map((country, index) => (
        <option key={country.value} value={index}>
          {country.label}
        </option>
      ))}
    </select>
  );
}

Select.propTypes = {
  value: PropTypes.number,
  onChange: PropTypes.func,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      value: PropTypes.string,
    })
  ),
};

export default Select;
