// possible to query for multiple countries
// https://restcountries.com/v3.1/alpha?codes={code},{code},{code}

// possible to filter the output of your request to include only the specified fields.
// https://restcountries.com/v3.1/{service}?fields={field},{field},{field}
// https://restcountries.com/v3.1/all?fields=name,capital,currencies

class RestCountriesService {
  constructor() {}

  async getCountryInfo() {
    try {
      const response = await fetch("http://localhost:3002/rest-countries");

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = response.json();
      console.log("Country data:", data);
      return data;
    } catch (error) {
      console.error("Error fetching country stats:", error);
      throw error;
    }
  }
}

export default new RestCountriesService();
