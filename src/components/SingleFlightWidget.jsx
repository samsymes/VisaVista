import { useEffect } from "react";
import { PropTypes } from "prop-types";

export default function SingleFlightWidget(props) {
  useEffect(() => {
    const script = document.createElement("script");

    script.src = "https://widgets.kiwi.com/scripts/widget-single-iframe.js";
    script.async = true;
    script.dataset.passengers = "1-0-0";
    script.dataset.lang = "en";
    script.dataset.affilid = "samanthawidget";
    script.dataset.from = props.from;
    script.dataset.to = props.to;
    script.dataset.return = "anytime";

    document.getElementById("widget-holder").appendChild(script);

    return () => {
      document.getElementById("widget-holder").removeChild(script);
    };
  }, [props.from, props.to]);

  return <div id="widget-holder"></div>;
}

SingleFlightWidget.propTypes = {
  from: PropTypes.string,
  to: PropTypes.string,
  className: PropTypes.string,
  id: PropTypes.string,
};
