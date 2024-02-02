class CurrencyService {
  constructor() {
    this.currencyData = [];
  }
  async getCurrencyInfo(fromCode, toCode) {
    const fromCurrency = fromCode.toLowerCase();
    const toCurrency = toCode.toLowerCase();
    console.log("currencyCodes", fromCode, toCode);
    const response = await fetch(
      `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${fromCurrency}/${toCurrency}.json`
    );
    const currencyData = await response.json();
    const currency = Object.entries(currencyData).map(([value, label]) => ({
      value,
      label,
    }));
    console.log(currency);
    return currency;
  }
}

export default new CurrencyService();
