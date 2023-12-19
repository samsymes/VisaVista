import data from "../entities/data.json";

class CountryService {
  constructor() {
    this.countries = data.origin;
  }

  getOriginCountries() {
    return Object.keys(this.countries);
  }

  getDestinationCountries(origin) {
    if (!origin || !this.countries[origin]) {
      return [];
    }

    const destinationCountries = this.countries[origin].destinations.map(
      (destination) => destination.destination_code
    );
    return destinationCountries;
  }
  getVisaRequirements(originCountry, destinationCountry) {
    const requirementsObj = this.countries[originCountry].destinations.find(
      (d) => d.destination_code === destinationCountry
    ).requirements;
    console.log("requirementsObj out", requirementsObj);
    return requirementsObj;
  }
}

export default new CountryService();
