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
    if ((props.passportCode, props.destCode)) {
      CurrencyService.getCurrencyInfo(props.passportCode, props.destCode).then(
        (response) => {
          setExchangeRate(response);
        }
      );
    }
  }, [props.passportCode, props.destCode]);

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
  if (props.passportCode && props.destCode !== null) {
    conversionCard = (
      <Card className="infoCard" id="converter" title={props.title}>
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
            currency: props.passportCode,
          })}{" "}
          {props.destCode} {"="}{" "}
          {Number(convertedAmount).toLocaleString("en-US", {
            style: "currency",
            currency: props.destCode,
          })}{" "}
        </div>
        <br />
        <Button onClick={handleConvertClick} text="Convert" />
      </Card>
    );
    return <div id="converter">{conversionCard}</div>;
  }
}

CurrencyConverter.propTypes = {
  passportCode: PropTypes.string,
  title: PropTypes.string,
  destCode: PropTypes.string,
};

export default CurrencyConverter;
