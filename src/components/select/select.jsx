import { propTypes } from "prop-types";

function Select(props) {
  return (
    <select value={props.value} onChange={props.onChange}>
      {props.options.map((option) => {
        return (
          <option key={option} value={option}>
            {option}
          </option>
        );
      })}
    </select>
  );
}

Select.propTypes = {
  value: propTypes.string,
  onChange: propTypes.func,
  options: propTypes.arrayOf(
    propTypes.shape({
      lable: propTypes.string,
      value: propTypes.string,
    })
  ),
};

export default Select;
