import Navbar from "../components/Navbar";
import { useSearchParams } from "react-router-dom";
import AllCountryInfoService from "../services/AllCountryInfoService";
import { Card } from "@mui/material";
import "./Results.css";
import { Viewer, Entity } from "resium";
import { Ion } from "cesium";
import { useEffect, useState } from "react";
import RestCountryService from "../services/RestCountryService";

function Results() {
  Ion.defaultAccessToken =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiIzZDhiNmY0ZC1kZmU3LTQ2YjQtOTNhYi0xOGY4YTQyNDI3NzQiLCJpZCI6MTg1MzkwLCJpYXQiOjE3MDMwMjI1MTd9.NyKMKAqdzoRhgLLvDxOBOkvzOQTQTWaupOA_tdyj8RM";
  const [searchParams] = useSearchParams();
  const From = searchParams.get("From");
  const To = searchParams.get("To");

  const originCountryName =
    AllCountryInfoService?.getOriginCountryNameFromAllCountryInfoService(To);
  const destinationCountryName =
    AllCountryInfoService?.getDestinationCountryNameFromAllCountryInfoService(
      To
    );
  const resultsObject =
    AllCountryInfoService?.getResultsObjectFromAllCountryInfoService(From, To);
  const visaRequirements =
    resultsObject?.getVisaRequirementsFromSearchResultsClass();
  const allowedStay = resultsObject?.getAllowedStayFromSearchResultsClass();
  const notes = resultsObject?.getNotesFromSearchResultsClass();

  // const [countryInfoObject, setCountryInfoObject] = useState(null);

  useEffect(() => {
    RestCountryService.getDestinationCountryInfoFromRestCountryService(To).then(
      (response) => {
        // setCountryInfoObject(response);
        console.log("3", response);
      }
    );
  }, [To]);

  return (
    <>
      <Navbar />
      <div className="row">
        <div className="col">
          <Card id="VisaInfo">
            <h4>Visa Info</h4>
            <p className="cardBody">
              <b>Origin Country:</b> {originCountryName}
              <br />
              <b>Destination Country:</b> {destinationCountryName}
              <br />
              <b>Visa Requirements: </b>
              {visaRequirements} <br />
              <b>Allowed Stay: </b> {allowedStay} <br />
              <b>Notes: </b> {notes}
            </p>
          </Card>
          <Card id="CountryInfo">
            <h4>Destination Info</h4>
            <p className="cardBody">
              {/* <b>Currency: *symbol*</b> {countryInfoObject} */}
              <b>Languages: </b>
              <b>Capital: </b>
              <b>time zones: </b>
              <b>Calling Code: </b>
              <b>Population: </b>
            </p>
          </Card>
        </div>
        <Card id="Map">
          <Viewer>
            <Entity />
          </Viewer>
        </Card>
      </div>
    </>
  );
}

export default Results;
