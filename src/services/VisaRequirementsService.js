import CountryService from "./CountryService";

class VisaRequirementsService {
  constructor() {
    this.requirementsObj = CountryService.getVisaRequirements.requirementsObj;

    console.log("requirementsObj in", this.requirementsObj);
  }
  getAllowedStay() {
    if (this.requirementsObj) {
      return this.requirementsObj.allowed_stay;
    }
  }
}

export default VisaRequirementsService;
