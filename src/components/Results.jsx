import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { useSearchParams } from "react-router-dom";
import VisaRequirementsService from "../services/VisaRequirementsService";

function Results() {
  const [searchParams] = useSearchParams();
  const From = searchParams.get("From");
  const To = searchParams.get("To");

  const [visaRequirements, setVisaRequirements] = useState("");

  useEffect(() => {
    const result = VisaRequirementsService.getVisaRequirements(From, To);
    setVisaRequirements(result);
  }, [From, To]);

  const visaReq = visaRequirements.requirementsObj?.allowed_stay;

  return (
    <>
      <Navbar />
      <div>
        <h2>Results Page </h2>
        <p> Origin Code: {From} </p>
        <p> Destination Code: {To} </p>
        <p>
          Visa Requirements:
          {visaReq}
        </p>
      </div>
    </>
  );
}

export default Results;
