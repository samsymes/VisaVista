import ResponsiveDrawer from "../components/ResponsiveDrawer";

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
        <div className="AboutParagraph p-3 m-1">
          <h2>Welcome to the VisaVista Web App</h2>

          <h5>Motivation:</h5>
          <p>
            This app is designed to provide users with a convenient platform to
            check visa requirements for international travel. As well as a handy
            Kiwi flight booker widget by. The app is built using React and
            Material UI, and it integrates with the Flagpedia API to display
            country flags. The app also features a Cesium map to visualize
            flight paths and a live data integration to fetch and display
            real-time data through external APIs.
          </p>
          <h5>Features:</h5>
          <h5> API Integrations and Technologies:</h5>
          <ul>
            {" "}
            <li>
              APIs: Flagpedia API Utilized for obtaining country flag images.
            </li>
          </ul>
          <h5>Libraries and Technologies: </h5>
          <ul>
            <li>Material UI: Integrated for designing React components. </li>
            <li>Resuim: Implemented as a React shell for the Cesium map.</li>
            <li>BootStrap: Employed as the front-end framework.</li>
            <li>
              Live Data Integration: Incorporated to fetch and display real-time
              data through external APIs.
            </li>
          </ul>
        </div>
      </ResponsiveDrawer>
    </>
  );
}

export default About;
