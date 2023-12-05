import Country from "../entities/countries";
import { data } from "./data.json";
//this is a major WIP
    const originCountry = {
      get originCountry() {
        return `${this.name} ${this.visaRequirements} ${this.vaccineRequirements} ${this.otherDocumentation}`;
      },
    };
  }
  async getDestinationCountries(originCountry) {
    if (!this.data) {
      //get data
      const destinationCountry = {
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
