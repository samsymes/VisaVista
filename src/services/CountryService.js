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
    const req = this.countries[originCountry].destinations.find(
      (d) => d.destination_code === destinationCountry
    ).requirements;
    return new VisaRequirementsService(req.visa);
  }
}

export default new CountryService();

class VisaRequirementsService {
  constructor(requirementsObj) {
    this.requirementsObj = requirementsObj;
    console.log("requirementsObj", this.requirementsObj);
  }
  getAllowedStay() {
    return this.requirementsObj.allowed_stay;
  }
}
