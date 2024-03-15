import { Card } from "@mui/material";
import ResponsiveDrawer from "../components/ResponsiveDrawer";
import "./About.css";
import profilePic from "../assets/profilePic.jpg";
import ImageElement from "../assets/ImageElement";
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
          <Card className="infoCard" id="aboutMe">
            <ImageElement id="profilePic" src={profilePic} />
            <div id="cardContent">
              <h6>Hey there!</h6>
              <p>
                My name is Sam Symes. I am a software developer with a passion
                for creating and designing web applications. I am a current
                student of Get Coding&apos;s Full-Stack Development mentorship
                program. I am a creative problem solver with a strong background
                in customer service and a passion for learning new technologies.
                I am excited to bring my skills to a team and help create
                innovative and user-friendly applications.
              </p>
              <p>
                Please feel free to reach out if you have any feedback or
                comments. I would love to hear from you!
              </p>
            </div>
          </Card>
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
        </div>
      </ResponsiveDrawer>
    </>
  );
}

export default About;
