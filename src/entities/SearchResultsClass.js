class VisaRequirements {
  constructor(requirementsObj) {
    this.requirementsObj = requirementsObj;
    console.log("requirementsObj", this.requirementsObj);
  }
  getVisaRequirements() {
    return this.requirementsObj.visa_requirements;
  }
  getAllowedStay() {
    return this.requirementsObj.allowed_stay;
  }
  getNotes() {
    return this.requirementsObj.notes;
  }
}

export default VisaRequirements;
