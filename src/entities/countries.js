class Country {
  constructor(name, visaRequirements, vaccineRequirements, otherDocumentation) {
    this.name = name;
    this.visaRequirements = visaRequirements;
    this.vaccineRequirements = vaccineRequirements;
    this.otherDocumentation = otherDocumentation;
  }
}
const ca = new Country(
  "Canada",
  "Varies by destination",
  "COVID-19 vaccine recommended",
  "Travel insurance"
);
const us = new Country(
  "USA",
  "Varies by nationality",
  "COVID-19 vaccine required",
  "ESTA for some"
);
const de = new Country(
  "Germany",
  "No visa for short stays",
  "COVID-19 vaccine recommended",
  "Proof of funds"
);
const fr = new Country(
  "France",
  "Schengen visa for some",
  "COVID-19 vaccine recommended",
  "Proof of accommodation"
);

ca.getRequirementsForDestination(us);
ca.getRequirementsForDestination(de);
ca.getRequirementsForDestination(fr);
