class CurrencyService {
  constructor() {
    this.currencyData = [];
  }
  async getCurrencyInfo() {
    const response = await fetch(
      `https://cdn.jsdelivr.net/gh/fawazahmed0/currencies/mxn/cad`
    );
    const data = await response.json();
    this.currencyData = data;
    console.log(data);
  }
}
export default new CurrencyService();
