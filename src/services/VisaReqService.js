import data from "../entities/data.json";
import VisaRequirementsClass from "../entities/VisaRequirementsClass";
class VisaReqService {
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

    const destinationCountries = this.countries[origin]?.destinations?.map(
      (destination) => destination.destination_code
    );
    return destinationCountries;
  }

  getDestinationCountryName(origin) {
    const destinationName = this.countries[origin].destinations.map(
      (destination) => destination.destination_name
    );
    return destinationName;
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
      ).requirements;
      return new VisaRequirementsClass(req.visa);
    }
  }
}

export default new VisaReqService();
