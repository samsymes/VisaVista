import { useEffect } from "react";
import PropTypes from "prop-types";

function Widget(props) {
  useEffect(() => {
    const script = document.createElement("script");

    script.src = "https://widgets.kiwi.com/scripts/widget-search-iframe.js";
    script.async = true;
    script.dataset.passengers = "1-0-0";
    script.dataset.affilid = "samanthawidget";
    script.dataset.from = props.from;
    script.dataset.to = props.to;
    script.dataset.ui = "tequila";

    document.getElementById("widget-holder").appendChild(script);
  }, [props.from, props.to]);

  return <div id="widget-holder"></div>;
}

export default Widget;
Widget.propTypes = {
  from: PropTypes.string,
  to: PropTypes.string,
};
