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
  JulianDate,
  SampledPositionProperty,
  LagrangePolynomialApproximation,
  ClockRange,
  TimeIntervalCollection,
  TimeInterval,
} from "cesium";
import { useEffect, useState, useRef } from "react";
import RestCountryService from "../services/RestCountryService";

import CurrencyConverter from "../components/CurrencyConverter";

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

  useEffect(() => {
    if (
      cesiumRef.current &&
      cesiumRef.current.cesiumElement &&
      originCountryInfo &&
      destinationCountryInfo
    ) {
      const stop = JulianDate.fromDate(new Date());
      const start = JulianDate.addSeconds(stop, -360, new JulianDate());

      const sampledProp = new SampledPositionProperty();

      // Define the number of points you want to create
      const numPoints = 100;

      // Calculate the total duration of the flight in seconds
      const totalDuration = JulianDate.secondsDifference(stop, start);

      // Calculate the duration of each segment of the flight
      const segmentDuration = totalDuration / numPoints;

      // Create an array to store the times of each point
      const times = Array.from({ length: numPoints }, (_, i) =>
        JulianDate.addSeconds(start, i * segmentDuration, new JulianDate())
      );

      // Create an array to store the positions of each point
      const positions = times.map((time) => {
        // Calculate the fraction of the total duration that has elapsed
        const fraction =
          JulianDate.secondsDifference(time, start) / totalDuration;

        // Calculate the longitude and latitude of the point
        const longitude =
          originCountryInfo.getOriginCapitalLng() +
          fraction *
            (destinationCountryInfo.getDestinationCapitalLng() -
              originCountryInfo.getOriginCapitalLng());
        const latitude =
          originCountryInfo.getOriginCapitalLat() +
          fraction *
            (destinationCountryInfo.getDestinationCapitalLat() -
              originCountryInfo.getOriginCapitalLat());

        // Return the position of the point
        return Cartesian3.fromDegrees(longitude, latitude);
      });

      // Add each position to the SampledPositionProperty
      positions.forEach((position, i) =>
        sampledProp.addSample(times[i], position)
      );

      sampledProp.setInterpolationOptions({
        interpolationDegree: 1,
        interpolationAlgorithm: LagrangePolynomialApproximation,
      });

      const viewer = cesiumRef.current.cesiumElement;

      viewer.clock.startTime = start.clone();
      viewer.clock.stopTime = stop.clone();
      viewer.clock.currentTime = start.clone();
      viewer.clock.clockRange = ClockRange.LOOP_STOP;
      viewer.clock.multiplier = 20;
      viewer.entities.add({
        availability: new TimeIntervalCollection([
          new TimeInterval({ start, stop }),
        ]),
        position: sampledProp,
        model: {
          uri: "/millennium_falcon.glb",
          minimumPixelSize: 128,
          maximumScale: 200000,
        },
      });
    }
  }, [originCountryInfo, destinationCountryInfo]);
  const name = destinationCountryInfo?.getCountryName() ?? [];
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
  if (
    originCapitalLat &&
    originCapitalLng &&
    destinationCapitalLat &&
    destinationCapitalLng
  ) {
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
          arcType={ArcType.GEODESIC}
        />
      </Entity>
    );
  }

  const cesiumRef = useRef(null);

  return (
    <>
      <div className="resultsContainer">
        <Navbar id="resultsNav" />
        <div className="mapContainer">
          <Viewer ref={cesiumRef} shouldAnimate={true}>
            {cameraFly}
            {lineEntity}
            {originLableEntity}
            {destinationLableEntity}
          </Viewer>
        </div>
        <div className="visaCard">
          <Card className="infoCard">
            <div className="infoCardContents">
              <h4>Visa Info</h4>
              <b>Visa Requirements: </b>
              {visaRequirements} <br />
              <b>Allowed Stay: </b> {allowedStay} <br />
              <b>Notes: </b> {notes}
            </div>
          </Card>
        </div>
        <div className="destinationCard">
          <Card className="infoCard" id="destinationInfo">
            <div className="infoCardContents">
              <h4>Destination Info</h4>
              <b>Country:</b> {name} <br />
              <b>Capital: </b> {capital} <br />
              <b>Time Zones: </b>
              {timeZones.join(", ")} <br />
              <b>Population: </b> {population.toLocaleString()} <br />
              <b>Languages: </b> {languages}
            </div>
          </Card>
        </div>
        <CurrencyConverter
          originCode={originCurrencyCodes}
          destCode={destinationCurrencyCodes}
        />
      </div>
    </>
  );
}

export default Results;
