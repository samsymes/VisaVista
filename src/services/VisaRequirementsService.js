import data from "../entities/data.json";

class VisaRequirementsService {
  constructor() {
    this.countries = data.origin;
  }

  getOriginCountries() {
    return Object.keys(this.countries).map((countryCode) => {
      return {
        code: countryCode,
        // destinations: this.countries[countryCode].destinations,
      };
    });
  }

  getDestinationCountries(origin) {
    if (!origin) {
      return [];
    }

    const destinationCountries = this.countries[origin].destinations.map(
      (country) => country.destination_code
    );

    return destinationCountries;
  }
}

export default VisaRequirementsService;
