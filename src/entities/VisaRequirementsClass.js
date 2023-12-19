class VisaRequirements {
  constructor(requirementsObj) {
    this.requirementsObj = requirementsObj;
    console.log("requirementsObj", this.requirementsObj);
  }
  getAllowedStay() {
    return this.requirementsObj.allowed_stay;
  }
}

export default VisaRequirements;
