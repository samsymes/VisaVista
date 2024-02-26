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
    if (origin || this.countries[origin]) {
      const destinationCountries = this.countries[origin]?.destinations?.map(
        (destination) => destination.destination_code
      );
      console.log("destination countries", destinationCountries);
      return destinationCountries;
    }
    return [];
  }
  getDestinationCountryNameFromAllCountryInfoService(origin, destination) {
    const destinationObject = this.countries[origin]?.destinations?.find(
      (d) => d.destination_code === destination
    );
    const destinationName = destinationObject?.destination_name;
    console.log("destination name", destinationName);

    return destinationName;
  }

  getOriginCountryNameFromAllCountryInfoService(origin) {
    if (origin) {
      return this.countries[origin]?.origin_name;
    }
  }

  generateCanadaLinks(origin, destinationName) {
    if (origin === "ca") {
      const link = `https://travel.gc.ca/destinations/${destinationName.toLowerCase()}`;
      console.log(`Link for ${destinationName}: ${link}`);
      return link;
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
