import SocialsButton from "./buttons/SocialsButton";
import Stack from "@mui/material/Stack";
import Github from "@mui/icons-material/GitHub";
import LinkedIn from "@mui/icons-material/LinkedIn";
import Email from "@mui/icons-material/Email";
import Logo from "../assets/Logo";
import { PropTypes } from "prop-types";

function Navbar(props) {
  return (
    <>
      <nav className="navbar" id={props.id}>
        <Logo id="logo" />

        <form className="d-flex">
          <Stack direction="row" alignItems="center" spacing={1}>
            <a className="nav-link socials" id="about" href="#about">
              ABOUT
            </a>
            <a className="nav-link socials" id="projects" href="#projects">
              PROJECTS
            </a>
            <a className="nav-link socials" id="contact" href="#contact">
              CONTACT
            </a>
            <SocialsButton
              id="github-icon"
              href="https://github.com/samsymes"
              type="sucess"
              ariaLabel="GitHub"
              iconElement={<Github color="success" />}
            ></SocialsButton>
            <SocialsButton
              id="linkedin-icon"
              href="https://www.linkedin.com/in/samanthasymes/"
              ariaLabel="LinkedIn"
              iconElement={<LinkedIn color="success" />}
            ></SocialsButton>
            <SocialsButton
              id="email-icon"
              href="mailto:samasymes@gmail.com"
              ariaLabel="Email"
              iconElement={<Email color="success" />}
            ></SocialsButton>
          </Stack>
        </form>
      </nav>
    </>
  );
}
export default Navbar;

Navbar.propTypes = {
  id: PropTypes.string,
};
