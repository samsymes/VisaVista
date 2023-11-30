import Navbar from "./Navbar";
import { useSearchParams } from "react-router-dom";

function Results() {
  const [searchParams] = useSearchParams();
  const From = searchParams.get("From");
  const To = searchParams.get("To");

  console.log("search Params", From, To);

  return (
    <>
      <Navbar />
      <div>
        <h2>Results Page </h2>
        <p> Origin Code: {From} </p>
        <p> Destination Code: {To} </p>
      </div>
    </>
  );
}

export default Results;
