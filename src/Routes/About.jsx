import ResponsiveDrawer from "../components/ResponsiveDrawer";
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
        {" "}
        <div className="AboutParagraph">
          <h1>About</h1>
          <ProfilePic />

          <p>
            Welcome to the VisaVista Web App Motivation: This app is designed to
            provide users with a convenient platform to check visa requirements
            for international travel. As well as a handy Kiwi flight booker
            widget by. The app is built using React and Material UI, and it
            integrates with the Flagpedia API to display country flags. The app
            also features a Cesium map to visualize flight paths and a live data
            integration to fetch and display real-time data through external
            APIs. API Integrations and Technologies: APIs: Flagpedia API
            Utilized for obtaining country flag images. Libraries and
            Technologies: Material UI: Integrated for designing React
            components. Resuim: Implemented as a React shell for the Cesium map.
            BootStrap: Employed as the front-end framework. Live Data
            Integration: Incorporated to fetch and display real-time data
            through external APIs. Contact Information: Your valuable feedback
            is welcomed! Feel free to share your thoughts and suggestions.
            GitHub: Visit my GitHub repository Email: samantha.symes@outlook.com
          </p>
        </div>{" "}
      </ResponsiveDrawer>
    </>
  );
}

export default About;
