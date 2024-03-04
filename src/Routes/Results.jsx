import { useSearchParams } from "react-router-dom";
import AllCountryInfoService from "../services/AllCountryInfoService";
import "./Results.css";
import Map from "../components/Map";
import { useEffect, useState } from "react";
import RestCountryService from "../services/RestCountryService";
import CurrencyConverter from "../components/CurrencyConverter";
import DashboardCard from "../components/Card";
import ResponsiveDrawer from "../components/ResponsiveDrawer";

import {
  AccessTime,
  Language,
  Newspaper,
  People,
  Place,
} from "@mui/icons-material";

function Results() {
  const [searchParams] = useSearchParams();
  const From = searchParams.get("From");
  const To = searchParams.get("To");
  const destinationCountryName =
    AllCountryInfoService?.getDestinationCountryNameFromAllCountryInfoService(
      From,
      To
    );
  const passportCountryName =
    AllCountryInfoService?.getPassportCountryNameFromAllCountryInfoService(
      From
    );
  const link = AllCountryInfoService?.generateCanadaLinks(
    From,
    destinationCountryName
  );
  console.log(AllCountryInfoService);
  const resultsObject =
    AllCountryInfoService?.getResultsObjectFromAllCountryInfoService(From, To);
  console.log("resultsObject", resultsObject);
  const visaRequirements =
    resultsObject?.getVisaRequirementsFromSearchResultsClass();
  const allowedStay = resultsObject?.getAllowedStayFromSearchResultsClass();
  const notes = resultsObject?.getNotesFromSearchResultsClass();
  const [passportCountryInfo, setPassportCountryInfo] = useState(null);
  const [destinationCountryInfo, setDestinationCountryInfo] = useState(null);

  const destinationCurrencyCodes =
    destinationCountryInfo?.getCurrencyCodes(To) ?? null;

  const passportCurrencyCodes =
    passportCountryInfo?.getCurrencyCodes(From) ?? null;

  useEffect(() => {
    RestCountryService.getCountryInfoFromRestCountryService(To).then(
      (destinationCountryInfoInstance) => {
        setDestinationCountryInfo(destinationCountryInfoInstance);
      }
    );
  }, [To]);

  useEffect(() => {
    RestCountryService.getCountryInfoFromRestCountryService(From).then(
      (passportCountryInfoInstance) => {
        setPassportCountryInfo(passportCountryInfoInstance);
      }
    );
  }, [From]);

  const name = destinationCountryInfo?.getCountryName() ?? " ";
  const capital = destinationCountryInfo?.getCapital() ?? [];
  const timeZones = destinationCountryInfo?.getTimezones() ?? [];
  const population = destinationCountryInfo?.getPopulation() ?? [];
  const languages = destinationCountryInfo?.getLanguages() ?? " ";
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
          <Map
            className="infoCard"
            id="mapCard"
            passportCapitalLat={passportCapitalLat}
            passportCapitalLng={passportCapitalLng}
            destinationCapitalLat={destinationCapitalLat}
            destinationCapitalLng={destinationCapitalLng}
            passportCountryInfo={passportCountryInfo}
            passportCountryName={passportCountryName}
            destinationCountryName={destinationCountryName}
          />

          <DashboardCard
            className="infoCard"
            id="populationCard"
            title={
              <>
                <People /> Population
              </>
            }
            text={population.toLocaleString()}
          ></DashboardCard>
          <DashboardCard
            className="infoCard"
            id="timeZoneCard"
            title={
              <>
                <AccessTime /> Time Zone
              </>
            }
            text={timeZones}
          ></DashboardCard>
          <DashboardCard
            className="infoCard"
            id="languagesCard"
            title={
              <>
                <Language /> Languages
              </>
            }
            text={languages}
          ></DashboardCard>
          <DashboardCard
            className="infoCard"
            id="visaCard"
            title={
              <>
                <Newspaper /> Visa Information
              </>
            }
          >
            <b>Visa Requirements: </b>
            {visaRequirements} <br />
            <b>Allowed Stay: </b> {allowedStay} <br />
            <b>Notes: </b> {notes} <br />
          </DashboardCard>
          <DashboardCard
            className="infoCard"
            id="destinationCard"
            title={
              <>
                <Place /> Destination
              </>
            }
          >
            <b>Country:</b> {name} <br />
            <b>Capital: </b> {capital} <br />
            <a href={link}>Travel Advice</a>
          </DashboardCard>

          <CurrencyConverter
            passportCode={passportCurrencyCodes}
            destCode={destinationCurrencyCodes}
            title="Currency Converter"
          />
        </div>
      </ResponsiveDrawer>
    </>
  );
}

export default Results;
