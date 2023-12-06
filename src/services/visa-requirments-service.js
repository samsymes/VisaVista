import Country from "../entities/countries";
import data from "./data.json";

class VisaRequirementsService {
  constructor() {
    this.countries = data.countries;
  }

  getOriginCountries() {
    const originCountries = this.countries.map((country) => country.origin);
    return originCountries;
  }

  getDestinationCountries(originCountry) {
    const destinationCountries = this.countries
      .filter((country) => country.origin === originCountry)
      .map((country) => country.destination);

    return destinationCountries;
  }

  getRequirementsForDestination(origin, destination) {
    const selectedCountry = this.countries.find(
      (country) =>
        country.origin === origin && country.destination === destination
    );

    return selectedCountry ? Country.visaRequirments : null;
  }
}

export default VisaRequirementsService;
