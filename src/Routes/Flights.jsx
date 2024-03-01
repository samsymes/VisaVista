import Widget from "../components/TravelWidget";
import ResponsiveDrawer from "../components/ResponsiveDrawer";
import { useSearchParams } from "react-router-dom";
import AllCountryInfoService from "../services/AllCountryInfoService";

function Flights() {
  const [searchParams] = useSearchParams();
  const From = searchParams.get("From");
  const To = searchParams.get("To");

  const passport = AllCountryInfoService.getStartAirportCode(From);
  const destination = AllCountryInfoService.getEndAirportCode(To);
  return (
    <>
      <ResponsiveDrawer>
        <Widget from={passport} to={destination} />
      </ResponsiveDrawer>
    </>
  );
}

export default Flights;
