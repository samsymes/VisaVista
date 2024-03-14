import data from "../entities/data.json";
import SearchResultsClass from "../entities/SearchResultsClass";

class AllCountryInfoService {
  constructor() {
    this.countries = data.passport;
  }

  getPassportCountriesFromAllCountryInfoService() {
    return Object.keys(this.countries);
  }

  getDestinationCountriesFromAllCountryInfoService(passport) {
    if (passport || this.countries[passport]) {
      const destinationCountries = this.countries[passport]?.destinations?.map(
        (destination) => destination.destination_code
      );
      console.log("destination countries", destinationCountries);
      return destinationCountries;
    }
    return [];
  }
  getDestinationCountryNameFromAllCountryInfoService(passport, destination) {
    const destinationObject = this.countries[passport]?.destinations?.find(
      (d) => d.destination_code === destination
    );
    const destinationName = destinationObject?.destination_name;
    console.log("destination name", destinationName);

    return destinationName;
  }

  getPassportCountryNameFromAllCountryInfoService(passport) {
    if (passport) {
      return this.countries[passport]?.passport_name;
    }
  }

  getResultsObjectFromAllCountryInfoService(passport, destination) {
    if (passport) {
      const req = this.countries[passport]?.destinations?.find(
        (d) => d.destination_code === destination
      );
      return new SearchResultsClass(req.results);
    }
  }
  getStartAirportCode(passport) {
    return this.countries[passport]?.passport_airport_code;
  }

  getEndAirportCode(passport, destination) {
    if (passport) {
      const destinationObject = this.countries[passport]?.destinations?.find(
        (d) => d.destination_code === destination
      );
      console.log(
        "destinatin airport",
        destinationObject?.destination_airport_code
      );
      return destinationObject?.destination_airport_code;
    }
  }
}
export default new AllCountryInfoService();
