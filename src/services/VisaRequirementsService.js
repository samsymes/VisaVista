import data from "../entities/data.json";

class VisaRequirementsService {
  constructor() {
    this.countries = data.origin;
  }

  getOriginCountries() {
    return Object.keys(this.countries);
  }

  getDestinationCountries(origin) {
    if (!origin) {
      return [];
    }

    const destinationCountries = this.countries[origin].destinations.map(
      (destination) => destination.destination_code
    );

    return destinationCountries;
  }
}

export default VisaRequirementsService;
