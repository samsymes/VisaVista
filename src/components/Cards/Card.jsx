import PropsType from "prop-types";

function Card(props) {
  return (
    <div className="card" id="Card">
      {props.children}
    </div>
  );
}

Card.propTypes = {
  children: PropsType.arrayOf(PropsType.node).isRequired,
};

export default Card;
