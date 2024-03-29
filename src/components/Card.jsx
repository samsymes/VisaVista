import PropTypes from "prop-types";
import { Card } from "@mui/material";
import { Component } from "react";

class DashboardCard extends Component {
  state = {
    className: this.props.className,
    id: this.props.id,
    title: this.props.title,
    text: this.props.text,
    children: this.props.children,
  };

  componentDidMount() {
    console.log("DashboardCard mounted");
  }
  componentDidUpdate() {
    console.log("DashboardCard updated");
  }
  componentWillUnmount() {
    console.log("DashboardCard unmounted");
  }
  render() {
    return (
      <Card className={this.props.className} id={this.props.id}>
        <div>
          <h6>
            <b>{this.props.title}</b>
          </h6>
          <div className={this.props.cardType} id={this.props.bodyStyle}>
            {this.props.text}
          </div>
          {this.props.children}
        </div>
      </Card>
    );
  }
}
export default DashboardCard;
DashboardCard.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string,
  title: PropTypes.any,
  cardType: PropTypes.string,
  text: PropTypes.any,
  children: PropTypes.node,
  bodyStyle: PropTypes.string,
};

// function DashboardCard(props) {
//   return (
//     <Card className={props.className} id={props.id}>
//       <div>
//         <h4>{props.title}</h4>
//         <div>{props.text}</div>
//         {props.children}
//       </div>
//     </Card>
//   );
// }
// export default DashboardCard;
