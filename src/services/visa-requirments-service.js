import Country from "../entities/countries";

class VisaRequirementsService {
  getOriginCountries() {
    if (!this.theData) {
      this.theData = Country;
    }
    return new Country(
      this.theData.name,
      this.theData.visaRequirements,
      this.theData.vaccineRequirements,
      this.theData.otherDocumentation
    );
  }
  getDestinationCountries(originCountries) {
    if (!this.theData) {
      this.theData = Country;
    }
    return new Country(
      this.theData.name,
      this.theData.visaRequirements,
      this.theData.vaccineRequirements,
      this.theData.otherDocumentation
    );
  }
  getRequirements(originCountries, destination) {
    if (!this.theData) {
      this.theData = Country;
    }
    return new Country(
      this.theData.name,
      this.theData.visaRequirements,
      this.theData.vaccineRequirements,
      this.theData.otherDocumentation
    );
  }
}

export default VisaRequirementsService();
