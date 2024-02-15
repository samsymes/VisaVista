import SocialsButton from "./buttons/SocialsButton";
import Stack from "@mui/material/Stack";
import Github from "@mui/icons-material/GitHub";
import LinkedIn from "@mui/icons-material/LinkedIn";
import Email from "@mui/icons-material/Email";
import Logo from "../assets/Logo";

function Navbar() {
  return (
    <>
      <nav className="navbar">
        <Logo id="logo" />

        <form className="d-flex">
          <Stack direction="row" spacing={1}>
            <a className="nav-link" href="#about">
              About
            </a>
            <a className="nav-link" href="#projects">
              Projects
            </a>
            <a className="nav-link" href="#contact">
              Contact
            </a>
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
      </nav>
    </>
  );
}
export default Navbar;
