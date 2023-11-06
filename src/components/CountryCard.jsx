function CountryCard() {
  return (
    <div className="card" id="countryCard">
      <div className="card-body">
        <h5 className="card-title">Chosen Country</h5>
        <p>**selected flag here**</p>
        <p className="card-text">visa requirements for your chosen country</p>
        <a href="#" className="btn btn-primary">
          Go somewhere
        </a>
      </div>
    </div>
  );
}

export default CountryCard;
