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

  const resultsObject = AllCountryInfoService?.getResultsObject(From, To);
  const visaRequirements = resultsObject?.getVisaRequirements();
  const allowedStay = resultsObject?.getAllowedStay();
  const notes = resultsObject?.getNotes();

  const [destinationCountryInfo, setDestinationCountryInfo] = useState(null);
  const [sourceCountryInfo, setSourceCountryInfo] = useState(null);
  useEffect(() => {
    RestCountriesService.getCountryInfo(From, To).then(
      ({ destinationCountry, sourceCountry }) => {
        // FIX IT: go up steam and get the first element of the array
        setDestinationCountryInfo(destinationCountry[0]);
        setSourceCountryInfo(sourceCountry[0]);
      }
    );
  }, [From, To]);
  console.log(
    "destinationCountryInfo",
    destinationCountryInfo,
    "sourceCountry",
    sourceCountryInfo
  );

  const {
    name: destinationCountryName = "",
    capital: destinationCapital = [],
    timeZones: destinationTimeZones = [],
    population: destinationPopulation = [],
    languages: destinationLanguages = [],
    // FIX IT: lat: destinationLatLng[0]
    lat: destinationLat = 0,
    // FIX IT: lng: destinationLatLng[1]
    lng: destinationLng = 0,
    currencies: destinationCurrencyCode = [],
    currencySymbol: destinationCurrencySymbol = [],
  } = destinationCountryInfo ?? {};

  const {
    name: sourceCountryName = "",
    // FIX IT: lat: sourceLatLng[0]
    lat: sourceLat = 0,
    // FIX IT: lng: sourceLatLng[1]
    lng: sourceLng = 0,
    currencies: sourceCurrencyCode = [],
    currencySymbol: sourceCurrencySymbol = [],
  } = sourceCountryInfo ?? {};

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
                  passportCapitalLat={sourceLat}
                  passportCapitalLng={sourceLng}
                  destinationCapitalLat={destinationLat}
                  destinationCapitalLng={destinationLng}
                  passportCountryName={sourceCountryName}
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
            text={destinationPopulation}
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
            text={destinationTimeZones}
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
            text={destinationLanguages}
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
                {destinationCapital}
                {", "} {destinationCountryName}
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
                // passportCode={sourceCurrencyCode}
                // destCode={destinationCurrencyCode}
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
