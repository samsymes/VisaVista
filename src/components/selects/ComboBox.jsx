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
      onChange={(event, value) => props.handleChange(value)}
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
  message: PropTypes.string,
  options: PropTypes.array,
  tag: PropTypes.string,
  selectedOption: PropTypes.string,
  handleChange: PropTypes.func,
};

export default ComboBox;
