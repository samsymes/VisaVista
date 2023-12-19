import { useEffect } from "react";
import Navbar from "./Navbar";
import { useSearchParams } from "react-router-dom";
import CountryService from "../services/CountryService";

function Results() {
  const [searchParams] = useSearchParams();
  const From = searchParams.get("From");
  const To = searchParams.get("To");

  useEffect(() => {
    CountryService.getVisaRequirements(From, To);
  }, [From, To]);

  const visaReq = CountryService.getVisaRequirements(From, To);
  const allowedStay = visaReq.getAllowedStay();
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
        </p>
      </div>
    </>
  );
}

export default Results;
