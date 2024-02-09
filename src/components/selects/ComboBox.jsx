import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import PropTypes from "prop-types";

function ComboBox(props) {
  return (
    <Autocomplete
      id="combo-box"
      sx={{ width: 300 }}
      options={props.options}
      autoHighlight
      value={props.value || null}
      disabled={props.disabled}
      onChange={(event, country) => props.onChange(country)}
      renderOption={(props, option) => (
        <li {...props} key={`${option.label} (${option.value})`}>
          {option.label}
        </li>
      )}
      renderInput={(params) => <TextField {...params} label={props.tag} />}
    />
  );
}

ComboBox.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string,
      label: PropTypes.string,
    })
  ),
  tag: PropTypes.string,
  value: PropTypes.shape({
    value: PropTypes.string,
    label: PropTypes.string,
  }),
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
};

export default ComboBox;
