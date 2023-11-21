import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import PropTypes from "prop-types";
import { FormControl } from "@mui/material";

function ComboBox(props) {
  return (
    <FormControl sx={{ m: 1, minWidth: 150 }}>
      <Autocomplete
        id="country-select-demo"
        sx={{ width: 300 }}
        options={props.options}
        autoHighlight
        onChange={(event, value) => props.handleChange(value)} //could be cleaner?
        renderOption={(props, option) => (
          <li {...props} key={`${option.label} (${option.value})`}>
            {option.label}
          </li>
        )}
        renderInput={(params) => (
          <TextField {...params} label="Choose a country" />
        )}
      />
    </FormControl>
  );
}

ComboBox.propTypes = {
  message: PropTypes.string,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string,
      label: PropTypes.string,
    })
  ),
  selectedOption: PropTypes.string,
  handleChange: PropTypes.func,
};

export default ComboBox;
