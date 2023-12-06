//this is a major WIP
import Country from "../entities/countries";
import data from "./data.json";

class VisaRequirementsService {
  async getOriginCountries() {
    //get origin countries from data
    const originCountry = this.countries.map((country) => {
      return country.origin;
    });

    return originCountry;
  }

  async getDestinationCountries(originCountry) {
    //get use origin country to get destination countries from data
    const destinationCountry = this.destination;
    if (originCountry) {
      //get destination countries from data
      return destinationCountry;
    }
  }

  async getRequirementsForDestination(origin, destination) {
    if (!this.originCountry === origin) {
      //get rquirments from data
      return this.visaRequirements;
    }
    return new Country(
      destination.name,
      destination.visaRequirements,
      destination.vaccineRequirements,
      destination.otherDocumentation
    );
  }

  anotherMethod() {
    //do stuff
  }
}

export default VisaRequirementsService();
