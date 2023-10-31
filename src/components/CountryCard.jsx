import canada from "../images/canada.png";

function CountryCard(props) {
  console.log(props.country);
  return (
    <div className="card" id="countryCard">
      <img src={canada} className="card-img-top" alt="flag of chosen country" />
      <div className="card-body">
        <h5 className="card-title">Chosen Country</h5>
        <p className="card-text">visa requirements for your chosen country</p>
        <a href="#" className="btn btn-primary">
          Go somewhere
        </a>
      </div>
    </div>
  );
}

export default CountryCard;
