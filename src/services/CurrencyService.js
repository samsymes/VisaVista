class CurrencyService {
  constructor() {
    this.currencyData = [];
  }

  async getExchangeRates(fromCode, toCode) {
    const toCurrency = toCode.toLowerCase();
    const fromCurrency = fromCode.toLowerCase();
    const response = await fetch(
      `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${toCurrency}.json`
    );
    const currencyData = await response.json();
    const exchangeRate = currencyData[toCurrency][fromCurrency];
    console.log(exchangeRate);
    return exchangeRate;
  }
}

export default new CurrencyService();
