import CountryInfo from "../entities/CountryInfo";
class RestCountryService {
  constructor() {
    this.countryList = [];
  }
  async getCountryInfo(code) {
    const response = await fetch(
      `https://restcountries.com/v3.1/alpha/${code}`
    );
    const countryData = await response.json();
    const restDestinationCountryList = countryData[0];
    const countryInfo = new CountryInfo(restDestinationCountryList);

    return countryInfo;
  }
}
export default new RestCountryService();
