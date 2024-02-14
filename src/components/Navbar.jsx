import SocialsButton from "./buttons/SocialsButton";
import Stack from "@mui/material/Stack";
import Github from "@mui/icons-material/GitHub";
import LinkedIn from "@mui/icons-material/LinkedIn";
import Email from "@mui/icons-material/Email";
import Logo from "../assets/Logo";
function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light">
        <Logo id="logo" />

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link" href="#about">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#projects">
                Projects
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">
                Contact
              </a>
            </li>
          </ul>
          <form className="d-flex">
            <Stack direction="row" spacing={1}>
              <SocialsButton
                href="https://github.com/samsymes"
                color="default"
                ariaLabel="GitHub"
                iconElement={<Github />}
              ></SocialsButton>
              <SocialsButton
                href="https://www.linkedin.com/in/samanthasymes/"
                color="default"
                ariaLabel="LinkedIn"
                iconElement={<LinkedIn />}
              ></SocialsButton>
              <SocialsButton
                href="mailto:samasymes@gmail.com"
                color="default"
                ariaLabel="Email"
                iconElement={<Email />}
              ></SocialsButton>
            </Stack>
          </form>
        </div>
      </nav>
    </>
  );
}
export default Navbar;
