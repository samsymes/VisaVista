import PropsType from "prop-types";

function Card(props) {
  return (
    <div className={props.className} id={props.id}>
      <div className="cardContents">{props.children}</div>
    </div>
  );
}

Card.propTypes = {
  className: PropsType.string,
  id: PropsType.string,
  children: PropsType.arrayOf(PropsType.node).isRequired,
};

export default Card;
