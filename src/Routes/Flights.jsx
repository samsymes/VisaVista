import ResponsiveDrawer from "../components/ResponsiveDrawer";
import Map from "../components/Map";
import ComboBox from "../components/ComboBox";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import DatePicker from "../components/DatePicker";
import { Grid } from "@mui/material";
import Item from "@mui/material/Grid";
import { useState, useEffect } from "react";

function Flights() {
  // Bring in list of options for ComboBoxes
  // const [selectedFromCountry, setSelectedFromCountry] = useState(null);
  // const [selectedToCountry, setSelectedToCountry] = useState(null);

  // const [selectedDate, setSelectedDate] = useState(null);
  // const [selectedReturnDate, setSelectedReturnDate] = useState(null);

  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <ResponsiveDrawer>
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
                  options={" "}
                  tag="Where To?"

                  // onChange={"onSelectionChange"}
                />
              </Item>
            </Grid>
            <Grid item m={3}>
              <Item>
                <ComboBox
                  options={" "}
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
