import data from "../entities/data.json";
import SearchResultsClass from "../entities/SearchResultsClass";
class VisaReqService {
  constructor() {
    this.countries = data.origin;
    console.log("this.countries", this.countries);
  }

  getOriginCountries() {
    return Object.keys(this.countries);
  }

  getDestinationCountries(origin) {
    if (!origin || !this.countries[origin]) {
      return [];
    }

    const destinationCountries = this.countries[origin]?.destinations?.map(
      (destination) => destination.destination_code
    );
    return destinationCountries;
  }

  getDestinationCountryName(origin, destination) {
    const destinationName = this.countries[origin]?.destinations?.find(
      (d) => d.destinations?.destination_name === destination
    );
    console.log("destinationName", destinationName);
    return destinationName.destination_name;
  }

  getOriginCountryName(origin) {
    if (origin) {
      return this.countries[origin]?.origin_name;
    }
  }

  getVisaRequirements(origin, destination) {
    if (origin) {
      const req = this.countries[origin]?.destinations?.find(
        (d) => d.destination_code === destination
      );
      return new SearchResultsClass(req.results);
    }
  }
}

export default new VisaReqService();
