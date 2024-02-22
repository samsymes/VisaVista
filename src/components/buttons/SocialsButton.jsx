import IconButton from "@mui/material/IconButton";
import { Component } from "react";
import { PropTypes } from "prop-types";

class SocialsButton extends Component {
  state = {
    href: this.props.href,
    ariaLabel: this.props.ariaLabel,
    iconElement: this.props.iconElement,
    id: this.props.id,
  };

  componentDidMount() {
    console.log("SocialsButton mounted");
  }
  componentDidUpdate() {
    console.log("SocialsButton updated");
  }
  componentWillUnmount() {
    console.log("SocialsButton unmounted");
  }
  render() {
    return (
      <IconButton href={this.props.href} aria-label={this.props.ariaLabel}>
        {this.props.iconElement}
      </IconButton>
    );
  }
}

SocialsButton.propTypes = {
  href: PropTypes.string,
  ariaLabel: PropTypes.string,
  iconElement: PropTypes.element,
  id: PropTypes.string,
};

// function SocialsButton(props) {
//   const button = (
//     <IconButton
//       href={props.href}
//       color={props.color}
//       aria-label={props.ariaLabel}
//     >
//       {props.iconElement}
//     </IconButton>
//   );
//   return button;
// }
export default SocialsButton;
