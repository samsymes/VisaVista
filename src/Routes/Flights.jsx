import Widget from "../components/TravelWidget";
import ResponsiveDrawer from "../components/ResponsiveDrawer";
// import { useSearchParams } from "react-router-dom";
function Flights() {
  //   const [searchParams] = useSearchParams();
  //   const From = searchParams.get("From");
  //   const To = searchParams.get("To");
  return (
    <>
      <ResponsiveDrawer
        homePath="/VisaVista"
        flightPath="/VisaVista/flights"
        aboutPath="/VisaVista/About"
        gitHubPath="https://github.com/samsymes"
        linkedInPath="https://www.linkedin.com/in/samanthasymes/"
        emailPath="mailto:samasymes@gmail.com"
        // resultsPath={`/VisaVista/results/?From=${From}&To=${To}`}
      >
        <Widget from="YOW" to="MEX" />
      </ResponsiveDrawer>
    </>
  );
}

export default Flights;
