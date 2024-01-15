class SearchResultsObjectClass {
  constructor(resultsObj) {
    this.resultsObj = resultsObj;
  }
  getVisaRequirementsFromSearchResultsClass() {
    return this.resultsObj.visa_requirements;
  }
  getAllowedStayFromSearchResultsClass() {
    return this.resultsObj.allowed_stay;
  }
  getNotesFromSearchResultsClass() {
    return this.resultsObj.notes;
  }
}

export default SearchResultsObjectClass;
