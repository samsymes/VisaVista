import Navbar from "../components/Navbar";
import { useSearchParams } from "react-router-dom";
import AllCountryInfoService from "../services/AllCountryInfoService";
import { Card } from "@mui/material";
import "./Results.css";
import {
  Viewer,
  Entity,
  PolylineGraphics,
  LabelGraphics,
  CameraFlyToBoundingSphere,
} from "resium";

import {
  ArcType,
  Cartesian3,
  LabelStyle,
  Ion,
  Color,
  PolylineGlowMaterialProperty,
  BoundingSphere,
} from "cesium";
import { useEffect, useState } from "react";
import RestCountryService from "../services/RestCountryService";

function Results() {
  Ion.defaultAccessToken =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiIzZDhiNmY0ZC1kZmU3LTQ2YjQtOTNhYi0xOGY4YTQyNDI3NzQiLCJpZCI6MTg1MzkwLCJpYXQiOjE3MDMwMjI1MTd9.NyKMKAqdzoRhgLLvDxOBOkvzOQTQTWaupOA_tdyj8RM";
  const [searchParams] = useSearchParams();
  const From = searchParams.get("From");
  const To = searchParams.get("To");

  const originCountryName =
    AllCountryInfoService?.getOriginCountryNameFromAllCountryInfoService(From);
  const destinationCountryName =
    AllCountryInfoService?.getDestinationCountryNameFromAllCountryInfoService(
      From,
      To
    );

  const resultsObject =
    AllCountryInfoService?.getResultsObjectFromAllCountryInfoService(From, To);
  const visaRequirements =
    resultsObject?.getVisaRequirementsFromSearchResultsClass();
  const allowedStay = resultsObject?.getAllowedStayFromSearchResultsClass();
  const notes = resultsObject?.getNotesFromSearchResultsClass();

  const [destinationCountryInfo, setDestinationCountryInfo] = useState(null);
  const [originCountryInfo, setOriginCountryInfo] = useState(null);

  useEffect(() => {
    RestCountryService.getCountryInfoFromRestCountryService(To).then(
      (destinationCountryInfoInstance) => {
        setDestinationCountryInfo(destinationCountryInfoInstance);
        console.log(
          "destinationCountryInfoInstance",
          destinationCountryInfoInstance
        );
      }
    );
  }, [To]);

  useEffect(() => {
    RestCountryService.getCountryInfoFromRestCountryService(From).then(
      (originCountryInfoInstance) => {
        setOriginCountryInfo(originCountryInfoInstance);
        console.log("originCountryInfoInstance", originCountryInfoInstance);
      }
    );
  }, [From]);

  const currencyCodes = destinationCountryInfo?.getCurrencyCodes() ?? [];
  const name = destinationCountryInfo?.getCountryName() ?? [];
  const symbol = destinationCountryInfo?.getCurrencySymbol(currencyCodes) ?? [];
  const capital = destinationCountryInfo?.getCapital() ?? [];
  const timeZones = destinationCountryInfo?.getTimezones() ?? [];
  const population = destinationCountryInfo?.getPopulation() ?? [];
  const languages = destinationCountryInfo?.getLanguages() ?? [];
  const destinationCapitalLat =
    destinationCountryInfo?.getDestinationCapitalLat();
  const destinationCapitalLng =
    destinationCountryInfo?.getDestinationCapitalLng();
  const originCapitalLat = originCountryInfo?.getOriginCapitalLat();
  const originCapitalLng = originCountryInfo?.getOriginCapitalLng();
  let originLableEntity;
  if (originCapitalLat && originCapitalLat) {
    originLableEntity = (
      <Entity
        name="LabelGrap"
        description="LabelGraphics!!"
        position={Cartesian3.fromDegrees(originCapitalLng, originCapitalLat)}
      >
        <LabelGraphics
          text={originCountryName}
          font="16px Helvetica"
          fillColor={Color.WHITE}
          outlineColor={Color.BLACK}
          outlineWidth={2}
          style={LabelStyle.FILL_AND_OUTLINE}
        />
      </Entity>
    );
  }
  let cameraFly;
  if (originCapitalLng && originCapitalLat) {
    cameraFly = (
      <CameraFlyToBoundingSphere
        boundingSphere={BoundingSphere.fromPoints([
          Cartesian3.fromDegrees(originCapitalLng, originCapitalLat),
          Cartesian3.fromDegrees(destinationCapitalLng, destinationCapitalLat),
        ])}
      />
    );
  }
  let destinationLableEntity;
  if (destinationCapitalLat && destinationCapitalLat) {
    destinationLableEntity = (
      <Entity
        name="LabelGrap"
        description="LabelGraphics!!"
        position={Cartesian3.fromDegrees(
          destinationCapitalLng,
          destinationCapitalLat
        )}
      >
        <LabelGraphics
          text={destinationCountryName}
          font="16px Helvetica"
          fillColor={Color.WHITE}
          outlineColor={Color.BLACK}
          outlineWidth={2}
          style={LabelStyle.FILL_AND_OUTLINE}
        />
      </Entity>
    );
  }

  let lineEntity;
  if (
    originCapitalLat &&
    originCapitalLng &&
    destinationCapitalLat &&
    destinationCapitalLng
  ) {
    lineEntity = (
      <Entity>
        <PolylineGraphics
          positions={Cartesian3.fromDegreesArray([
            originCapitalLng,
            originCapitalLat,
            destinationCapitalLng,
            destinationCapitalLat,
          ])}
          width={3}
          material={
            new PolylineGlowMaterialProperty({
              glowPower: 0.1,
              color: Color.YELLOW,
            })
          }
          arcType={ArcType.RHUMB}
        />
      </Entity>
    );
  }
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
              <b>Country:</b> {name} <br />
              <b>Currency:</b> {currencyCodes} {symbol} <br />
              <b>Capital: </b> {capital} <br />
              <b>Time Zones: </b>
              {timeZones.join(", ")}
              <br />
              <b>Population: </b> {population.toLocaleString()} <br />
              <b>Destination LngLat</b> {destinationCapitalLng},{" "}
              {destinationCapitalLat}
              <br />
              <b>Origin LngLat</b> {originCapitalLng}, {originCapitalLat} <br />
              <b>Languages: </b> {languages}
            </p>
          </Card>
        </div>
        <Card id="Map">
          <Viewer>
            {cameraFly}
            {lineEntity}
            {originLableEntity}
            {destinationLableEntity}
          </Viewer>
        </Card>
      </div>
    </>
  );
}

export default Results;
