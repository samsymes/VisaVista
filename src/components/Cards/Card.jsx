import PropTypes from "prop-types";

function Card(props) {
  return (
    <div className={props.className} id={props.id}>
      {props.children}
    </div>
  );
}

Card.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string,
  children: PropTypes.node,
};

export default Card;
