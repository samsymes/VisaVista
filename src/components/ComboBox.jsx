import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import PropTypes from "prop-types";
import { FormControl } from "@mui/material";

function CountrySelect(props) {
  return (
    <FormControl sx={{ m: 1, minWidth: 150 }}>
      <Autocomplete
        id="country-select-demo"
        sx={{ width: 300 }}
        options={props.countryList}
        autoHighlight
        onChange={props.handleCountryChange}
        value={props.selectedCountry?.value}
        getOptionLabel={(option) => `${option.label} (${option.value})`}
        renderInput={(params) => (
          <TextField {...params} label="Choose a country" />
        )}
      />
    </FormControl>
  );
}

CountrySelect.propTypes = {
  message: PropTypes.string,
  countryList: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string,
      label: PropTypes.string,
    })
  ),
  selectedCountry: PropTypes.string,
  handleCountryChange: PropTypes.func,
};

export default CountrySelect;
