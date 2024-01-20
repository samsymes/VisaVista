class RestCountryService {
  constructor() {
    this.countryList = [];
  }
  async getCountryInfoFromRestCountryService(code) {
    const response = await fetch(
      `https://restcountries.com/v3.1/alpha/${code}`
    );
    const countryData = await response.json();
    const restDestinationCountryList = countryData[0];
    this.countryList = restDestinationCountryList;
    return restDestinationCountryList;
  }
}
export default new RestCountryService();
