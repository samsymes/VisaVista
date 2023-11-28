import { useParams } from "react-router-dom";
import Flag from "./Flag";

function FlagRoute() {
  const { countryCode } = useParams();

  return <Flag code={countryCode} />;
}

export default FlagRoute;
