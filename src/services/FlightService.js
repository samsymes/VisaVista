class FlightService {
  constructor() {
    this.flight = [];
  }
  async getFlights() {
    const API_KEY = "ae3b4061c8ee73d09de28a93bff57f61";

    const response = await fetch(
      `https://fhttps://api.aviationstack.com/v1/flights?access_key=${API_KEY}`
    );
    const flightData = await response.json();
    console.log(flightData);
  }
}
export default new FlightService();
