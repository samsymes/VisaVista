import profilePic from "./profilePic.jpg";
import { PropTypes } from "prop-types";
function ProfilePic(props) {
  return <img src={profilePic} id={props.id} alt="Profile pic" />;
}
ProfilePic.propTypes = {
  id: PropTypes.string,
};
export default ProfilePic;
