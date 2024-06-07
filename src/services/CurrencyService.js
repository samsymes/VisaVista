class CurrencyService {
  constructor() {
    this.currencyData = [];
  }
  // repo - https://github.com/fawazahmed0/exchange-api
  // format - https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@{date}/{apiVersion}/{endpoint}

  async getExchangeRates(fromCode, toCode) {
    const toCurrency = toCode.toLowerCase();
    const fromCurrency = fromCode.toLowerCase();
    const response = await fetch(
      `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${toCurrency}.json`
      // toCurrency = iso-aplha3
    );
    const currencyData = await response.json();
    const exchangeRate = currencyData[toCurrency][fromCurrency];
    return exchangeRate;
  }
}

export default new CurrencyService();
// TODO: Warning: Please include Fallback mechanism in your code, for example if cdn.jsdelivr.net
// link fails, fetch from currency - api.pages.dev
// notes - https://github.com/fawazahmed0/exchange-api/issues/90#issue-2168885277
