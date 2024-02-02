class CurrencyService {
  constructor() {
    this.currencyData = [];
  }
  async getCurrencyInfo(fromCode, toCode) {
    const response = await fetch(
      `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${fromCode}/${toCode}.json`
    );
    const currencydata = await response.json();
    this.currencyData = currencydata;
    console.log(currencydata);
    return currencydata;
  }
}
export default new CurrencyService();
