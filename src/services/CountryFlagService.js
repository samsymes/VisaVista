async function CountryFlagService() {
  const response = await fetch("https://flagcdn.com/en/codes.json");
  const countryData = await response.json();
  const apiFlagList = Object.entries(countryData).map(([value, label]) => ({
    value,
    label,
  }));

  return apiFlagList;
}

export default CountryFlagService;
