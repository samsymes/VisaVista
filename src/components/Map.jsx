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
import { PropTypes } from "prop-types";
import MillenniumFalcon from "/public/millennium_falcon.glb";
import { useEffect, useRef } from "react";
function Map(props) {
  Ion.defaultAccessToken =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiIzZDhiNmY0ZC1kZmU3LTQ2YjQtOTNhYi0xOGY4YTQyNDI3NzQiLCJpZCI6MTg1MzkwLCJpYXQiOjE3MDMwMjI1MTd9.NyKMKAqdzoRhgLLvDxOBOkvzOQTQTWaupOA_tdyj8RM";
  const cesiumRef = useRef(null);

  useEffect(() => {
    if (
      cesiumRef.current &&
      cesiumRef.current.cesiumElement &&
      props.passportCountryInfo
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
          props.passportCapitalLng +
          fraction * (props.destinationCapitalLng - props.passportCapitalLng);
        const latitude =
          props.passportCapitalLat +
          fraction * (props.destinationCapitalLat - props.passportCapitalLat);

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
          uri: MillenniumFalcon,
          minimumPixelSize: 128,
          maximumScale: 200000,
        },
      });
    }
  }, [
    props.passportCountryInfo,
    props.passportCountryName,
    props.destinationCountryName,
    props.passportCapitalLat,
    props.passportCapitalLng,
    props.destinationCapitalLat,
    props.destinationCapitalLng,
  ]);

  let passportLableEntity;
  if (props.passportCapitalLat && props.passportCapitalLat) {
    passportLableEntity = (
      <Entity
        name="LabelGrap"
        description="LabelGraphics!!"
        position={Cartesian3.fromDegrees(
          props.passportCapitalLng,
          props.passportCapitalLat
        )}
      >
        <LabelGraphics
          text={props.passportCountryName}
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
    props.passportCapitalLat &&
    props.passportCapitalLng &&
    props.destinationCapitalLat &&
    props.destinationCapitalLng
  ) {
    cameraFly = (
      <CameraFlyToBoundingSphere
        boundingSphere={BoundingSphere.fromPoints([
          Cartesian3.fromDegrees(
            props.passportCapitalLng,
            props.passportCapitalLat
          ),
          Cartesian3.fromDegrees(
            props.destinationCapitalLng,
            props.destinationCapitalLat
          ),
        ])}
      />
    );
  }
  let destinationLableEntity;
  if (props.destinationCapitalLat && props.destinationCapitalLat) {
    destinationLableEntity = (
      <Entity
        name="LabelGrap"
        description="LabelGraphics!!"
        position={Cartesian3.fromDegrees(
          props.destinationCapitalLng,
          props.destinationCapitalLat
        )}
      >
        <LabelGraphics
          text={props.destinationCountryName}
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
    props.passportCapitalLat &&
    props.passportCapitalLng &&
    props.destinationCapitalLat &&
    props.destinationCapitalLng
  ) {
    lineEntity = (
      <Entity>
        <PolylineGraphics
          positions={Cartesian3.fromDegreesArray([
            props.passportCapitalLng,
            props.passportCapitalLat,
            props.destinationCapitalLng,
            props.destinationCapitalLat,
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

  return (
    <>
      <Viewer
        id={props.id}
        ref={cesiumRef}
        shouldAnimate={true}
        homeButton={false}
        geocoder={false}
        sceneModePicker={false}
        baseLayerPicker={false}
        navigationHelpButton={false}
        timeline={false}
        animation={false}
      >
        {cameraFly}
        {lineEntity}
        {passportLableEntity}
        {destinationLableEntity}
      </Viewer>
    </>
  );
}

export default Map;

Map.propTypes = {
  id: PropTypes.string,
  passportCountryInfo: PropTypes.object,
  passportCountryName: PropTypes.string,
  destinationCountryName: PropTypes.string,
  passportCapitalLat: PropTypes.number,
  passportCapitalLng: PropTypes.number,
  destinationCapitalLat: PropTypes.number,
  destinationCapitalLng: PropTypes.number,
};
