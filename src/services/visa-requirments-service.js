import Country from "../entities/countries";
import { data } from "./data.json";

class VisaRequirementsService {
  async getOriginCountries() {
    const originCountry = {
      get originCountry() {
        return originCountry;
      },
    };
  }
  async getDestinationCountries(originCountry) {
    if (!this.data) {
      //get data
      const destinationCountries = {
        get destinationCountry() {
          return destinationCountry;
        },
      };
    }
  }
  async getRequirements(originCountry, destinationCountry) {
    if (!this.data) {
      this.data = data.map((item) => {
        return new Country(
          item.originCountry,
          item.destinationCountry,
          item.visaRequirements,
          item.vaccineRequirements,
          item.otherDocumentation
        );
      });
    }
    const country = this.data.find((item) => {
      return item.originCountry === originCountry;
    });
    return country.getRequirementsForDestination(destinationCountry);
  }
}

export default VisaRequirementsService();
