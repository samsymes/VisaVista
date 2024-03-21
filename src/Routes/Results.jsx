import { useSearchParams } from "react-router-dom";
import AllCountryInfoService from "../services/AllCountryInfoService";
import "./Results.css";
import Map from "../components/Map";
import { useEffect, useState } from "react";
import RestCountryService from "../services/RestCountryService";
import CurrencyConverter from "../components/CurrencyConverter";
import DashboardCard from "../components/Card";
import ResponsiveDrawer from "../components/ResponsiveDrawer";
import SingleFlightWidget from "../components/SingleFlightWidget";
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
  const [searchParams] = useSearchParams();
  const From = searchParams.get("From");
  const To = searchParams.get("To");
  const FromAirport = AllCountryInfoService?.getStartAirportCode(From);
  const ToAirport = AllCountryInfoService?.getEndAirportCode(From, To);

  const destinationCountryName =
    AllCountryInfoService?.getDestinationCountryName(From, To);
  const passportCountryName =
    AllCountryInfoService?.getPassportCountryName(From);

  const resultsObject = AllCountryInfoService?.getResultsObject(From, To);
  const visaRequirements = resultsObject?.getVisaRequirements();
  const allowedStay = resultsObject?.getAllowedStay();
  const notes = resultsObject?.getNotes();
  const [passportCountryInfo, setPassportCountryInfo] = useState(null);
  const [destinationCountryInfo, setDestinationCountryInfo] = useState(null);

  const destinationCurrencyCodes =
    destinationCountryInfo?.getCurrencyCodes(To) ?? null;

  const passportCurrencyCodes =
    passportCountryInfo?.getCurrencyCodes(From) ?? null;

  useEffect(() => {
    RestCountryService.getCountryInfo(To).then(
      (destinationCountryInfoInstance) => {
        setDestinationCountryInfo(destinationCountryInfoInstance);
      }
    );
  }, [To]);

  useEffect(() => {
    RestCountryService.getCountryInfo(From).then(
      (passportCountryInfoInstance) => {
        setPassportCountryInfo(passportCountryInfoInstance);
      }
    );
  }, [From]);

  const name = destinationCountryInfo?.getCountryName() ?? " ";
  const capital = destinationCountryInfo?.getCapital() ?? [];
  const timeZones = destinationCountryInfo?.getTimezones() ?? [];
  const population = destinationCountryInfo?.getPopulation() ?? [];
  const languages = destinationCountryInfo?.getLanguages() ?? [];
  const destinationCapitalLat =
    destinationCountryInfo?.getDestinationCapitalLat();
  const destinationCapitalLng =
    destinationCountryInfo?.getDestinationCapitalLng();
  const passportCapitalLat = passportCountryInfo?.getPassportCapitalLat();
  const passportCapitalLng = passportCountryInfo?.getPassportCapitalLng();

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
                  passportCapitalLat={passportCapitalLat}
                  passportCapitalLng={passportCapitalLng}
                  destinationCapitalLat={destinationCapitalLat}
                  destinationCapitalLng={destinationCapitalLng}
                  passportCountryInfo={passportCountryInfo}
                  passportCountryName={passportCountryName}
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
            text={population.toLocaleString()}
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
            text={timeZones.join(", ")}
          />
          <DashboardCard
            className="infoCard"
            id="languagesCard"
            cardType="rowCardContent"
            title={
              <>
                <Language /> Languages
              </>
            }
            text={languages.join(", ")}
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
                  passportCode={passportCurrencyCodes}
                  destCode={destinationCurrencyCodes}
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
                <SingleFlightWidget from={FromAirport} to={ToAirport} />
              </>
            }
          />
        </div>
      </ResponsiveDrawer>
    </>
  );
}

export default Results;
