import { Card } from "@mui/material";
import ResponsiveDrawer from "../components/ResponsiveDrawer";
import "./About.css";
import ProfilePic from "../assets/ProfilePic";
function About() {
  return (
    <>
      <ResponsiveDrawer
        homePath="./VisaVista"
        flightPath="./VisaVista/flights"
        aboutPath="./VisaVista/About"
        gitHubPath="https://github.com/samsymes"
        linkedInPath="https://www.linkedin.com/in/samanthasymes/"
        emailPath="mailto:samasymes@gmail.com"
      >
        <div className="aboutContainer">
          <Card className="infoCard" id="about">
            <div id="cardContent">
              <h5>Motivation:</h5>
              <p>
                This app is designed to provide users with a convenient platform
                to check visa requirements for international travel. As well as
                a handy Kiwi flight booker widget. The app is built using
                React.js and Material UI, and it integrates with the Flagpedia
                API to display country flags. The app also features a Cesium map
                to visualize flight paths and a live data integration to fetch
                and display real-time data through external APIs.
              </p>
              <h5>Features:</h5>
              <h6> API Integrations and Technologies:</h6>
              <ul>
                {" "}
                <li>
                  APIs: Flagpedia API Utilized for obtaining country flag
                  images.
                </li>
              </ul>
              <h6>Libraries and Technologies: </h6>
              <ul>
                <li>
                  Material UI: Integrated for designing React components.{" "}
                </li>
                <li>
                  Resuim: Implemented as a React shell for the Cesium map.
                </li>
                <li>BootStrap: Employed as the front-end framework.</li>
                <li>
                  Live Data Integration: Incorporated to fetch and display
                  real-time data through external APIs.
                </li>
              </ul>
            </div>
          </Card>
          <Card className="infoCard" id="aboutMe">
            <ProfilePic />{" "}
            <div id="bio">
              I am a software developer living in St. John&apos;s, Newfoundland.
              I have a passion for creating innovative and user-friendly
              applications. I am skilled in HTML, CSS, and JavaScript and I have
              experience working with a variety of databases and APIs. I am a
              quick learner and a team player, and I am always looking for
              opportunities to expand my skill set and take on new challenges. I
              am excited to bring my creativity and technical expertise to a
              dynamic and collaborative team.
            </div>
          </Card>
        </div>
      </ResponsiveDrawer>
    </>
  );
}

export default About;
