import PropsType from "prop-types";

function Card(props) {
  return (
    <div className={props.className}>
      <div className="cardContents">{props.children}</div>
    </div>
  );
}

Card.propTypes = {
  className: PropsType.string,
  children: PropsType.arrayOf(PropsType.node).isRequired,
};

export default Card;
