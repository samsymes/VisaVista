import flag from "../images/flag.png";
function CountryCard() {
  return (
    <>
      <div className="card" style={{ width: "18rem" }}>
        <img src={flag} className="card-img-top" alt="flag of chosen country" />
        <div className="card-body">
          <h5 className="card-title">Chosen Country</h5>
          <p className="card-text">visa requirements for your chosen country</p>
          <a href="#" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    </>
  );
}

export default CountryCard;
