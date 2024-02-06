class CurrencyService {
  constructor() {
    this.currencyData = [];
  }
  async getCurrencyInfo(fromCode, toCode) {
    const fromCurrency = fromCode.toLowerCase();
    const toCurrency = toCode.toLowerCase();

    const response = await fetch(
      `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${fromCurrency}/${toCurrency}.json`
    );
    const currencyData = await response.json();
    const currency = Object.entries(currencyData).map(([value, label]) => ({
      value,
      label,
    }));

    return currency;
  }
}

export default new CurrencyService();
