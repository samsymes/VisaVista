import { useEffect } from "react";
import PropTypes from "prop-types";

function Widget(props) {
  useEffect(() => {
    const script = document.createElement("script");

    script.src = "https://widgets.kiwi.com/scripts/widget-single-iframe.js";
    script.async = true;
    script.dataset.passengers = "1-0-0";
    script.dataset.affilid = "samanthawidget";
    script.dataset.from = props.from;
    script.dataset.to = props.to;

    document.getElementById("widget-holder").appendChild(script);
  }, []);

  return <div id="widget-holder"></div>;
}

Widget.propTypes = {
  from: PropTypes.string,
  to: PropTypes.string,
};

export default Widget;
