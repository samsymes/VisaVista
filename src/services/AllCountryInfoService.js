// used to be VisaService.js
import data from "../entities/data.json";
import SearchResultsClass from "../entities/SearchResultsClass";

class AllCountryInfoService {
  constructor() {
    this.countries = data.origin;
  }

  getOriginCountriesFromAllCountryInfoService() {
    return Object.keys(this.countries);
  }

  getDestinationCountriesFromAllCountryInfoService(origin) {
    if (!origin || !this.countries[origin]) {
      return [];
    }

    const destinationCountries = this.countries[origin]?.destinations?.map(
      (destination) => destination.destination_code
    );
    return destinationCountries;
  }

  getDestinationCountryNameFromAllCountryInfoService(origin, destination) {
    const destinationName = this.countries[origin]?.destinations?.find(
      (d) => d.destinations?.destination_name === destination
    );
    return destinationName.destination_name;
  }

  getOriginCountryNameFromAllCountryInfoService(origin) {
    if (origin) {
      return this.countries[origin]?.origin_name;
    }
  }

  getResultsObjectFromAllCountryInfoService(origin, destination) {
    if (origin) {
      const req = this.countries[origin]?.destinations?.find(
        (d) => d.destination_code === destination
      );
      return new SearchResultsClass(req.results);
    }
  }
}

export default new AllCountryInfoService();
