import data from "../entities/data.json";
import SearchResultsClass from "../entities/SearchResultsClass";
// put data in a table
class AllCountryInfoService {
  constructor() {
    this.countries = data.passport;
  }

  getPassportCountries() {
    return Object.keys(this.countries);
  }

  getDestinationCountries(passport) {
    if (passport || this.countries[passport]) {
      const destinationCountries = this.countries[passport]?.destinations?.map(
        (destination) => destination.destination_code
      );

      return destinationCountries;
    }
    return [];
  }
  getDestinationCountryName(passport, destination) {
    const destinationObject = this.countries[passport]?.destinations?.find(
      (d) => d.destination_code === destination
    );
    const destinationName = destinationObject?.destination_name;

    return destinationName;
  }

  getPassportCountryName(passport) {
    if (passport) {
      return this.countries[passport]?.passport_name;
    }
  }

  getResultsObject(passport, destination) {
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

      return destinationObject?.destination_airport_code;
    }
  }
}
export default new AllCountryInfoService();
