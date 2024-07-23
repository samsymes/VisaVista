// possible to query for multiple countries
// https://restcountries.com/v3.1/alpha?codes={code},{code},{code}

// possible to filter the output of your request to include only the specified fields.
// https://restcountries.com/v3.1/{service}?fields={field},{field},{field}
// https://restcountries.com/v3.1/all?fields=name,capital,currencies

class RestCountryService {
  private baseUrl = "http://localhost:3002/countryInfo";

  async getCountryInfo() {
    const url = `${this.baseUrl}`;
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error("Error fetching country data:", error);
    }
  }
}

export default new RestCountryService();
