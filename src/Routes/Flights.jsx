import ResponsiveDrawer from "../components/ResponsiveDrawer";
// import { useSearchParams } from "react-router-dom";
// import AllCountryInfoService from "../services/AllCountryInfoService";
import Map from "../components/Map";
import ComboBox from "../components/ComboBox";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import DatePicker from "../components/DatePicker";
import { Grid } from "@mui/material";
import Item from "@mui/material/Grid";
function Flights() {
  // const [searchParams] = useSearchParams();
  // const From = searchParams.get("From");
  // const To = searchParams.get("To");

  // const passport = AllCountryInfoService.getStartAirportCode(From);
  // const destination = AllCountryInfoService.getEndAirportCode(To);
  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <ResponsiveDrawer>
          {/* <FlightData from={passport} to={destination} /> */}
          {"Flights"}
          <Grid
            container
            direction="row"
            justifyContent="space-evenly"
            alignItems="center"
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            <Grid item m={3}>
              <Item>
                <ComboBox
                  // options={options}
                  tag="Where to?"
                  // onChange={onChange}
                />
              </Item>
            </Grid>
            <Grid item m={3}>
              <Item>
                <ComboBox // options={options}
                  tag="From Where?"
                  // onChange={onChange}
                />
              </Item>
            </Grid>
            <Grid item m={3}>
              <Item>
                <DatePicker />
              </Item>
            </Grid>
            <Grid item m={3}>
              <Item>
                <DatePicker />
              </Item>
            </Grid>
          </Grid>

          <Map
            id="FlightMap"
            // passportCountryName={passport}
            // destinationCountryName={destination}
          />
        </ResponsiveDrawer>
      </LocalizationProvider>
    </>
  );
}

export default Flights;
