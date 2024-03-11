import { PropTypes } from "prop-types";
export default function ImageElement(props) {
  return <img src={props.src} id={props.id} alt="image" />;
}
ImageElement.propTypes = {
  src: PropTypes.string,
  id: PropTypes.string,
};
