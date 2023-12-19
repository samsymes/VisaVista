import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { useSearchParams } from "react-router-dom";
import VisaReqService from "../services/VisaReqService";

function Results() {
  const [searchParams] = useSearchParams();
  const From = searchParams.get("From");
  const To = searchParams.get("To");

  const visaReq = VisaReqService.getVisaRequirements(From, To);
  const allowedStay = visaReq.getAllowedStay(From, To);
  const [visaRequirements, setVisaRequirements] = useState([]);
  useEffect(() => {
    VisaReqService.getVisaRequirements(From, To);
    setVisaRequirements(allowedStay);
  }, [From, To, allowedStay]);

  return (
    <>
      <Navbar />
      <div>
        <h2>Results Page </h2>
        <p> Origin Code: {From} </p>
        <p> Destination Code: {To} </p>
        <p>
          Visa Requirements:
          {visaRequirements}
        </p>
      </div>
    </>
  );
}

export default Results;
