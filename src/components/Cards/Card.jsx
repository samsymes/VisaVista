import PropsType from "prop-types";

function Card(props) {
  return (
    <div className="card" id={props.id}>
      <div className="card-body">{props.children}</div>
    </div>
  );
}

Card.propTypes = {
  id: PropsType.string,
  children: PropsType.arrayOf(PropsType.node).isRequired,
};

export default Card;
