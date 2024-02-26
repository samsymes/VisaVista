import Navbar from "../components/Navbar";
import { useSearchParams } from "react-router-dom";
import AllCountryInfoService from "../services/AllCountryInfoService";
import "./Results.css";
import Map from "../components/Map";
import { useEffect, useState } from "react";
import RestCountryService from "../services/RestCountryService";
import DestinationCard from "../components/DestinationCard";
import CurrencyConverter from "../components/CurrencyConverter";
import VisaInfoCard from "../components/VisaInfoCard";
import Widget from "../components/TravelWidget";
function Results() {
  const [searchParams] = useSearchParams();
  const From = searchParams.get("From");
  const To = searchParams.get("To");
  const destinationCountryName =
    AllCountryInfoService?.getDestinationCountryNameFromAllCountryInfoService(
      From,
      To
    );
  const originCountryName =
    AllCountryInfoService?.getOriginCountryNameFromAllCountryInfoService(From);

  const link = AllCountryInfoService?.generateCanadaLinks(
    From,
    destinationCountryName
  );

  const resultsObject =
    AllCountryInfoService?.getResultsObjectFromAllCountryInfoService(From, To);
  const visaRequirements =
    resultsObject?.getVisaRequirementsFromSearchResultsClass();
  const allowedStay = resultsObject?.getAllowedStayFromSearchResultsClass();
  const notes = resultsObject?.getNotesFromSearchResultsClass();

  const [originCountryInfo, setOriginCountryInfo] = useState(null);
  const [destinationCountryInfo, setDestinationCountryInfo] = useState(null);

  const destinationCurrencyCodes =
    destinationCountryInfo?.getCurrencyCodes(To) ?? null;

  const originCurrencyCodes = originCountryInfo?.getCurrencyCodes(From) ?? null;

  useEffect(() => {
    RestCountryService.getCountryInfoFromRestCountryService(To).then(
      (destinationCountryInfoInstance) => {
        setDestinationCountryInfo(destinationCountryInfoInstance);
      }
    );
  }, [To]);

  useEffect(() => {
    RestCountryService.getCountryInfoFromRestCountryService(From).then(
      (originCountryInfoInstance) => {
        setOriginCountryInfo(originCountryInfoInstance);
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
  const originCapitalLat = originCountryInfo?.getOriginCapitalLat();
  const originCapitalLng = originCountryInfo?.getOriginCapitalLng();

  return (
    <>
      <div className="resultsContainer">
        <Navbar id="resultsNav" />

        <div className="mapContainer">
          <Map
            originCapitalLat={originCapitalLat}
            originCapitalLng={originCapitalLng}
            destinationCapitalLat={destinationCapitalLat}
            destinationCapitalLng={destinationCapitalLng}
            originCountryInfo={originCountryInfo}
            originCountryName={originCountryName}
            destinationCountryName={destinationCountryName}
          />
        </div>
        <VisaInfoCard
          visaRequirements={visaRequirements}
          allowedStay={allowedStay}
          notes={notes}
        />

        <DestinationCard
          name={name}
          capital={capital}
          languages={languages}
          timeZones={timeZones.join(", ")}
          population={population.toLocaleString()}
          link={link}
        />

        <CurrencyConverter
          originCode={originCurrencyCodes}
          destCode={destinationCurrencyCodes}
        />
      </div>
      <Widget from="YOW" to="MEX" />
    </>
  );
}

export default Results;
