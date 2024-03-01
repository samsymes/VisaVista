class CountryInfo {
  constructor(countryInfo) {
    this.countryInfo = countryInfo;
  }

  getCurrencyCodes() {
    if (this.countryInfo.currencies != null) {
      const currencyCodes = Object.keys(this.countryInfo.currencies);
      return currencyCodes[0] || "";
    }
    return "";
  }
  getCountryName() {
    if (this.countryInfo.name.common != null) {
      return this.countryInfo.name.common;
    }
    return [];
  }

  getCurrencySymbol(currency) {
    if (this.countryInfo.currencies != null) {
      return this.countryInfo.currencies[currency].symbol;
    }
    return null;
  }

  getCapital() {
    if (this.countryInfo?.capital != null) {
      return this.countryInfo.capital;
    }
    return [];
  }
  getTimezones() {
    if (this.countryInfo?.timezones != null) {
      return this.countryInfo.timezones;
    }
    return [];
  }

  getPopulation() {
    if (this.countryInfo.population != null) {
      return this.countryInfo.population;
    }
    return null;
  }
  getDestinationCapitalLat() {
    if (this.countryInfo?.capitalInfo.latlng != null) {
      return this.countryInfo?.capitalInfo?.latlng[0];
    }
    return null;
  }
  getDestinationCapitalLng() {
    if (this.countryInfo?.capitalInfo.latlng != null) {
      return this.countryInfo?.capitalInfo?.latlng[1];
    }
    return null;
  }
  getPassportCapitalLat() {
    if (this.countryInfo?.capitalInfo.latlng != null) {
      return this.countryInfo?.capitalInfo?.latlng[0];
    }
    return null;
  }
  getPassportCapitalLng() {
    if (this.countryInfo?.capitalInfo.latlng != null) {
      return this.countryInfo?.capitalInfo?.latlng[1];
    }
    return null;
  }

  getLanguages() {
    if (this.countryInfo?.languages != null) {
      return Object.values(this.countryInfo.languages).join(", ");
    }
    return [];
  }
}
export default CountryInfo;
