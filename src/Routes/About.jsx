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
        <div>
          <h1>About</h1>
          <p>
            This is a travel app that helps you find visa requirements for your
            destination.
          </p>
        </div>{" "}
      </ResponsiveDrawer>
    </>
  );
}

export default About;
