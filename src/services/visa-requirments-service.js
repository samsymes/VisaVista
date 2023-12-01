class Country {
  constructor(name, visaRequirements, vaccineRequirements, otherDocumentation) {
    this.name = name;
    this.visaRequirements = visaRequirements;
    this.vaccineRequirements = vaccineRequirements;
    this.otherDocumentation = otherDocumentation;
  }

  getRequirementsForDestination(destination) {
    console.log(
      `\nTravel Requirements from ${this.name} to ${destination.name}:`
    );
    console.log(`Visa Requirements: ${destination.visaRequirements}`);
    console.log(`Vaccine Requirements: ${destination.vaccineRequirements}`);
    console.log(`Other Documentation: ${destination.otherDocumentation}`);
  }
}

// Example data for a few countries
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
const japan = new Country(
  "Japan",
  "No visa for short stays",
  "No specific vaccine requirements",
  "Proof of financial means"
);
const brazil = new Country(
  "Brazil",
  "Electronic visa for some",
  "Yellow fever vaccine required for certain regions",
  "Proof of return ticket"
);
const india = new Country(
  "India",
  "eVisa for some",
  "Polio vaccine recommended",
  "Proof of accommodation"
);
const russia = new Country(
  "Russia",
  "Tourist visa required",
  "No specific vaccine requirements",
  "Registration upon arrival"
);
const southAfrica = new Country(
  "South Africa",
  "No visa for short stays",
  "Yellow fever vaccine required if coming from an infected area",
  "Proof of onward travel"
);
const vietnam = new Country(
  "Vietnam",
  "Tourist visa required",
  "No specific vaccine requirements",
  "Approval letter for visa on arrival"
);
const argentina = new Country(
  "Argentina",
  "No visa for short stays",
  "Yellow fever vaccine recommended for certain regions",
  "Health insurance"
);
const singapore = new Country(
  "Singapore",
  "No visa for short stays",
  "No specific vaccine requirements",
  "Proof of funds"
);
const turkey = new Country(
  "Turkey",
  "e-Visa for some",
  "No specific vaccine requirements",
  "Proof of return ticket"
);
const newZealand = new Country(
  "New Zealand",
  "No visa for short stays",
  "No specific vaccine requirements",
  "Travel insurance"
);

// Add more countries as needed
const france = new Country(
  "France",
  "Schengen visa for some",
  "COVID-19 vaccine recommended",
  "Proof of accommodation"
);
const australia = new Country(
  "Australia",
  "Electronic visa for some",
  "COVID-19 vaccine required",
  "Proof of funds"
);

// Display travel requirements for specific country pairs
canada.getRequirementsForDestination(usa);
canada.getRequirementsForDestination(germany);
canada.getRequirementsForDestination(france);
canada.getRequirementsForDestination(australia);
canada.getRequirementsForDestination(japan);
canada.getRequirementsForDestination(brazil);
canada.getRequirementsForDestination(india);
canada.getRequirementsForDestination(russia);
canada.getRequirementsForDestination(southAfrica);
canada.getRequirementsForDestination(vietnam);
canada.getRequirementsForDestination(argentina);
canada.getRequirementsForDestination(singapore);
canada.getRequirementsForDestination(turkey);
canada.getRequirementsForDestination(newZealand);
