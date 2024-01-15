import Navbar from "../components/Navbar";
import { useSearchParams } from "react-router-dom";
import AllCountryInfoService from "../services/AllCountryInfoService";
import { Card } from "@mui/material";
import "./Results.css";
import { Viewer, Entity } from "resium";
import { Ion } from "cesium";

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
  const requirements =
    AllCountryInfoService?.getResultsObjectFromAllCountryInfoService(From, To);
  const searchResults =
    requirements?.getVisaRequirementsFromSearchResultsClass();

  return (
    <>
      <Navbar />
      <div className="row">
        <div className="col">
          <Card id="VisaInfo">
            <h4>Visa Info</h4>
            <p> Origin Code: {originCountryName} </p>
            <p> Destination Code: {destinationCountryName} </p>
            <p>
              Visa Requirements:
              {searchResults}
            </p>
          </Card>
          <Card id="CountryInfo">
            <h4>Country Info</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
              deleniti hic dolores fuga eveniet, aperiam repudiandae ullam
              quisquam voluptas magni modi consequuntur beatae. Tenetur
              voluptate eligendi aperiam amet hic repellendus!
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
