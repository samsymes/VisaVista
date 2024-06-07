import CountryInfo from "../entities/CountryInfo";
class RestCountryService {
  constructor() {
    this.countryList = [];
  }
  // possible to query for multiple countries
  // https://restcountries.com/v3.1/alpha?codes={code},{code},{code}

  // possible to filter the output of your request to include only the specified fields.
  // https://restcountries.com/v3.1/{service}?fields={field},{field},{field}
  // https://restcountries.com/v3.1/all?fields=name,capital,currencies

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
