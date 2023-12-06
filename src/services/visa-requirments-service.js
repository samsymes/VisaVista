import Country from "../entities/countries";
import data from "../entities/data.json";

class VisaRequirementsService {
  constructor() {
    this.countries = data.countries;
  }

  getOriginCountries() {
    const originCountries = this.countries.map((country) => country.origin);
    return originCountries;
  }

  getDestinationCountries(origin) {
    const destinationCountries = this.countries
      .filter((country) => country.origin === origin)
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
