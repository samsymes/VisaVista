import { useSearchParams } from "react-router-dom";

class RestCountriesService {
  constructor() {}

  async getCountryInfo() {
    try {
      const [searchParams] = useSearchParams();
      const From = searchParams.get("From");
      const To = searchParams.get("To");
      const response = await fetch(
        `http://localhost:3002/rest-countries?From=${From}&To=${To}`
      );
      const countryInfo = await response.json();
      console.log("Country data:", countryInfo);
      return countryInfo;
    } catch (error) {
      console.error("Error fetching country stats:", error);
      throw error;
    }
  }
}

export default new RestCountriesService();
