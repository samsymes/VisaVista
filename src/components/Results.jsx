import Navbar from "./Navbar";
import { useSearchParams } from "react-router-dom";

class Country {
  constructor(name, visaRequirements, vaccineRequirements, otherDocumentation) {
    this.name = name;
    this.visaRequirements = visaRequirements;
    this.vaccineRequirements = vaccineRequirements;
    this.otherDocumentation = otherDocumentation;
  }

  getRequirementsForDestination(destination) {
    console.log(
      `Travel Requirements from ${this.name} to ${destination.name}:`
    );
    console.log(`Visa Requirements: ${destination.visaRequirements}`);
    console.log(`Vaccine Requirements: ${destination.vaccineRequirements}`);
    console.log(`Other Documentation: ${destination.otherDocumentation}`);
  }
}

const canada = new Country(
  "Canada",
  "Varies by destination",
  "COVID-19 vaccine recommended",
  "Travel insurance"
);
const usa = new Country(
  "USA",
  "Varies by nationality",
  "COVID-19 vaccine required",
  "ESTA for some"
);
const germany = new Country(
  "Germany",
  "No visa for short stays",
  "COVID-19 vaccine recommended",
  "Proof of funds"
);
const france = new Country(
  "France",
  "Schengen visa for some",
  "COVID-19 vaccine recommended",
  "Proof of accommodation"
);

canada.getRequirementsForDestination(usa);
canada.getRequirementsForDestination(germany);
canada.getRequirementsForDestination(france);

function Results() {
  const [searchParams] = useSearchParams();
  const From = searchParams.get("From");
  const To = searchParams.get("To");

  console.log("search Params", From, To);

  return (
    <>
      <Navbar />
      <div>
        <h2>Results Page </h2>
        <p> Origin Code: {From} </p>
        <p> Destination Code: {To} </p>
      </div>
    </>
  );
}

export default Results;
