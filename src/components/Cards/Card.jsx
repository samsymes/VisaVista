import PropsType from "prop-types";

function Card(props) {
  return (
    <div className="card" id="Card">
      {props.children}
    </div>
  );
}

Card.propTypes = {
  option: PropsType.shape({
    value: PropsType.string,
    label: PropsType.string,
  }),

  children: PropsType.arrayOf(PropsType.node).isRequired,
};

export default Card;
