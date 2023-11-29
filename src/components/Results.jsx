import Navbar from "./Navbar";
import { useParams } from "react-router-dom";
import Text from "./resultsText";
function Results() {
  const { countryCode } = useParams();
  return (
    <>
      <Navbar />
      <Text text={countryCode} />
    </>
  );
}

export default Results;
