import { useSearchParams } from "react-router-dom";
import AllCountryInfoService from "../services/AllCountryInfoService";
import "./Results.css";
import Map from "../components/Map";
import { useEffect, useState } from "react";
import RestCountriesService from "../services/RestCountriesService";
import CurrencyConverter from "../components/CurrencyConverter";
import DashboardCard from "../components/Card";
import ResponsiveDrawer from "../components/ResponsiveDrawer";
// import SingleFlightWidget from "../components/SingleFlightWidget";
import {
  AccessTime,
  CurrencyExchange,
  Flight,
  Language,
  Newspaper,
  People,
  Place,
} from "@mui/icons-material";

function Results() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [searchParams] = useSearchParams();
  const From = searchParams.get("From");
  const To = searchParams.get("To");

  // const FromAirport = AllCountryInfoService?.getStartAirportCode(From);
  // const ToAirport = AllCountryInfoService?.getEndAirportCode(From, To);
  // const passportCountryName =
  //   AllCountryInfoService?.getPassportCountryName(From);
  // const [passportCountryInfo, setPassportCountryInfo] = useState(null);
  // const passportCurrencyCodes =
  //   passportCountryInfo?.getCurrencyCodes(From) ?? null;

  const destinationCountryName =
    AllCountryInfoService?.getDestinationCountryName(From, To);

  const resultsObject = AllCountryInfoService?.getResultsObject(From, To);
  const visaRequirements = resultsObject?.getVisaRequirements();
  const allowedStay = resultsObject?.getAllowedStay();
  const notes = resultsObject?.getNotes();

  const [destinationCountryInfo, setDestinationCountryInfo] = useState(null);

  useEffect(() => {
    RestCountriesService.getCountryInfo(From, To).then(
      (destinationCountryInfoInstance) => {
        setDestinationCountryInfo(destinationCountryInfoInstance);
      }
    );
  }, [From, To]);
  console.log("destinationCountryInfo", destinationCountryInfo);

  const {
    name = [],
    capital = [],
    timeZones = [],
    population = [],
    languages = [],
    lat = 0,
    lng = 0,
    // currencies = [],
    // currencySymbol = [],
  } = destinationCountryInfo ?? {};

  return (
    <>
      <ResponsiveDrawer>
        <div className="resultsContainer">
          <DashboardCard
            className="infoCard"
            id="mapCard"
            text={
              <>
                <Map
                  id="map"
                  // passportCapitalLat={passportCapitalLat}
                  // passportCapitalLng={passportCapitalLng}
                  destinationCapitalLat={lat}
                  destinationCapitalLng={lng}
                  // passportCountryInfo={passportCountryInfo}
                  // passportCountryName={passportCountryName}
                  destinationCountryName={destinationCountryName}
                />
              </>
            }
          />

          <DashboardCard
            className="infoCard"
            id="populationCard"
            cardType="rowCardContent"
            title={
              <>
                <People /> Population
              </>
            }
            text={population}
          />
          <DashboardCard
            className="infoCard"
            id="timeZoneCard"
            bodyStyle="timeZoneCardBody"
            cardType="columnCardContent"
            title={
              <>
                <AccessTime /> Time Zone
              </>
            }
            text={timeZones}
          />
          <DashboardCard
            className="infoCard"
            id="languagesCard"
            cardType="columnCardContent"
            bodyStyle="languagesCardBody"
            title={
              <>
                <Language /> Languages
              </>
            }
            text={languages}
          />
          <DashboardCard
            className="infoCard"
            id="visaCard"
            cardType="columnCardContent"
            bodyStyle="visaCardBody"
            title={
              <>
                <Newspaper /> Visa Information
              </>
            }
            text={
              <>
                <b>Visa Requirements: </b> {visaRequirements}
                <b>Allowed Stay: </b> {allowedStay}
                <b>Notes: </b> {notes}
              </>
            }
          />

          <DashboardCard
            className="infoCard"
            id="destinationCard"
            cardType="rowCardContent"
            title={
              <>
                <Place /> Destination
              </>
            }
            text={
              <>
                {capital}
                {", "} {name}
              </>
            }
          />

          <DashboardCard
            className="infoCard"
            id="converter"
            cardType="rowCardContent"
            title={
              <>
                <CurrencyExchange /> Currency Converter
              </>
            }
            text={
              <>
                <CurrencyConverter

                // passportCode={passportCurrencyCodes}
                // destCode={destinationCurrencyCodes}
                />
              </>
            }
          />
          <DashboardCard
            className="infoCard"
            id="flight-widget"
            cardType="flightCardContent"
            title={
              <>
                <Flight /> Flights
              </>
            }
            text={
              <>
                {" "}
                {/* <SingleFlightWidget from={FromAirport} to={ToAirport} /> */}
              </>
            }
          />
        </div>
      </ResponsiveDrawer>
    </>
  );
}

export default Results;
