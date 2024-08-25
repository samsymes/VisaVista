class RestCountriesService {
  constructor() {}

  async getCountryInfo(from: string, to: string) {
    try {
      const response = await fetch(
        `http://localhost:3002/rest-countries?From=${from}&To=${to}`
      );
      console.log(
        "FROM FRONTEND:",
        `http://localhost:3002/rest-countries?From=${from}&To=${to}`
      );
      const countryInfo = await response.json();
      console.log("Country data received:", countryInfo);
      return countryInfo;
    } catch (error) {
      console.error("Error fetching country data:", error);
      throw error;
    }
  }
}

export default new RestCountriesService();
