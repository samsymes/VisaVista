class SearchResultsObjectClass {
  constructor(resultsObj) {
    this.resultsObj = resultsObj;
  }
  getVisaRequirements() {
    return this.resultsObj.visa_requirements;
  }
  getAllowedStay() {
    return this.resultsObj.allowed_stay;
  }
  getNotes() {
    return this.resultsObj.notes;
  }
}

export default SearchResultsObjectClass;
