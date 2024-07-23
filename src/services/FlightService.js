class FlightService {
  constructor() {
    this.flightData = [];
  }

  async getFlightData() {
    const response = await fetch(`/https://opensky-network.org/api`);
    const flightData = await response.json();

    console.log(flightData);

    return flightData;
  }
}

export default new FlightService();
