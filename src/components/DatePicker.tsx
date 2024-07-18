import { DatePicker } from "@mui/x-date-pickers";
import React from "react";
import PropTypes from "prop-types";

export default function CalendarComponent(props) {
  return <DatePicker value={props.value} onChange={props.onChange} />;
}

CalendarComponent.propTypes = {
  // The date value
  value: PropTypes.instanceOf(Date),
  // The date change handler
  onChange: PropTypes.func,
};
