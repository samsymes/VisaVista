import { useEffect } from "react";
import Navbar from "./Navbar";
import { useSearchParams } from "react-router-dom";
import CountryService from "../services/CountryService";
import VisaRequementsService from "../services/VisaRequirementsService";
function Results() {
  const [searchParams] = useSearchParams();
  const From = searchParams.get("From");
  const To = searchParams.get("To");

  // const [visaRequirements, setVisaRequirements] = useState([]);
  useEffect(() => {
    CountryService.getVisaRequirements(From, To);
    // setVisaRequirements(visaReq);
  }, [From, To]);

  const visaReq = new VisaRequementsService(From, To);

  const allowedStay = visaReq.getAllowedStay(From, To);
  console.log("allowed stay", allowedStay);
  return (
    <>
      <Navbar />
      <div>
        <h2>Results Page </h2>
        <p> Origin Code: {From} </p>
        <p> Destination Code: {To} </p>
        <p>
          Visa Requirements:
          {allowedStay}
          {/* {visaRequirements} */}
        </p>
      </div>
    </>
  );
}

export default Results;
