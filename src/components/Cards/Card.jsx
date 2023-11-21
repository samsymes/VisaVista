import PropsType from "prop-types";

function Card(props) {
  return (
    <div className="card" id="Card">
      <div className="card-body">
        <h5 className="card-title">{props.option?.label}</h5>
        {props.children}
      </div>
    </div>
  );
}

Card.propTypes = {
  option: PropsType.shape({
    value: PropsType.string,
    label: PropsType.string,
    image: PropsType.string,
  }),
  image: PropsType.string,
  children: PropsType.element,
};

export default Card;
