import PropsType from "prop-types";

function Card(props) {
  return (
    <div className="card" id="Card">
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        {props.children}
      </div>
    </div>
  );
}

Card.propTypes = {
  title: PropsType.string,
  option: PropsType.shape({
    value: PropsType.string,
    label: PropsType.string,
  }),

  children: PropsType.element,
};

export default Card;
