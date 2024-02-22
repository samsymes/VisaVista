import { useEffect, useState } from "react";
import Button from "../components/buttons/Button";
import CurrencyService from "../services/CurrencyService";
import CustomNumberInput from "../components/CustomNumberInput";
import { PropTypes } from "prop-types";
import Card from "./Card";

function CurrencyConverter(props) {
  const [exchangeRate, setExchangeRate] = useState();
  const [amount, setAmount] = useState("1");
  const [convertedAmount, setConvertedAmount] = useState(0);
  useEffect(() => {
    if ((props.originCode, props.destCode)) {
      CurrencyService.getCurrencyInfo(props.originCode, props.destCode).then(
        (response) => {
          setExchangeRate(response);
        }
      );
    }
  }, [props.originCode, props.destCode]);

  useEffect(() => {
    if (exchangeRate != null) {
      setConvertedAmount(Number(exchangeRate));
    }
  }, [exchangeRate]);
  const handleAmountChange = (event) => {
    setAmount(event.target.value);
  };
  const handleConvertClick = () => {
    if (exchangeRate && !isNaN(amount)) {
      setConvertedAmount(amount * exchangeRate);
    }
  };

  let conversionCard;
  if (props.originCode && props.destCode !== null) {
    conversionCard = (
      <Card className="infoCard" id="converter">
        <div className="infoCardContents">
          <h4>Currency Converter</h4>
          <div>
            <CustomNumberInput
              aria-label="Demo number input"
              placeholder="Type a number…"
              min={0}
              value={amount}
              onChange={handleAmountChange}
              onInput={(e) => {
                e.target.value = e.target.value.replace(/-/g, "").slice(0, 5);
              }}
            />
            <br />{" "}
            {Number(amount).toLocaleString("en-US", {
              style: "currency",
              currency: props.originCode,
            })}{" "}
            {props.destCode} {"="}{" "}
            {Number(convertedAmount).toLocaleString("en-US", {
              style: "currency",
              currency: props.destCode,
            })}{" "}
          </div>
          <br />
          <Button onClick={handleConvertClick} text="Convert" />
        </div>
      </Card>
    );
    return <div className="converterCard">{conversionCard}</div>;
  }
}

CurrencyConverter.propTypes = {
  originCode: PropTypes.string,
  destCode: PropTypes.string,
};

export default CurrencyConverter;
