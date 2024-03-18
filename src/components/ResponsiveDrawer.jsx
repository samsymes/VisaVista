import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import SocialsButton from "./buttons/SocialsButton";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Github from "@mui/icons-material/GitHub";
import LinkedIn from "@mui/icons-material/LinkedIn";
import Email from "@mui/icons-material/Email";
import avatar from "../assets/avatar.gif";
import ImageElement from "../assets/ImageElement";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import { useState } from "react";
import logo from "../assets/visavista-logo.png";
import { ThemeProvider, createTheme } from "@mui/material";
import { NavLink } from "react-router-dom";
import { FlightTakeoff, Home, ScreenSearchDesktop } from "@mui/icons-material";
import { PropTypes } from "prop-types";
const drawerWidth = 240;

function ResponsiveDrawer(props) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };

  const drawer = (
    <div className="sideBar">
      {
        <>
          <ImageElement src={logo} id="logo" /> VisaVista
        </>
      }

      <List className="navLinks">
        {[
          { text: "Home", path: "/VisaVista/" },
          { text: "Flights", path: "/VisaVista/Flights/" },
          { text: "About", path: "/VisaVista/About" },
        ].map((item, index) => (
          <ListItem key={item.text}>
            <NavLink to={item.path} end>
              <ListItemButton>
                <ListItemIcon>
                  {(() => {
                    switch (index % 3) {
                      case 0:
                        return <Home />;
                      case 1:
                        return <FlightTakeoff />;
                      case 2:
                        return <ScreenSearchDesktop />;

                      default:
                        return null;
                    }
                  })()}
                </ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItemButton>
            </NavLink>
          </ListItem>
        ))}
      </List>
      <div className="sideFooter">
        <div id="footerText">Built by</div>
        <ImageElement id="avatarSideBar" src={avatar} /> Sam Symes <br />
        <div className="icons">
          <SocialsButton
            href="https://github.com/samsymes"
            ariaLabel="GitHub"
            iconElement={<Github />}
          />
          <SocialsButton
            href="https://www.linkedin.com/in/samanthasymes/"
            ariaLabel="LinkedIn"
            iconElement={<LinkedIn />}
          />
          <SocialsButton
            href="mailto:samasymes@gmail.com"
            ariaLabel="Email"
            iconElement={<Email />}
          />
        </div>
      </div>
    </div>
  );
  const theme = createTheme({
    palette: {
      primary: {
        main: "#F5F5F5",
      },
      secondary: {
        main: "#f50057",
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <Box>
          {" "}
          <AppBar
            position="fixed"
            color="default"
            sx={{
              width: { sm: `calc(100% - ${drawerWidth}px)` },
              ml: { sm: `${drawerWidth}px` },
            }}
          >
            <Toolbar>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ mr: 2, display: { sm: "none" } }}
              >
                <MenuIcon />
              </IconButton>
            </Toolbar>
          </AppBar>
        </Box>
        <Box
          component="nav"
          color="primary"
          sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
          aria-label="mailbox folders"
        >
          <Drawer
            variant="temporary"
            open={mobileOpen}
            onTransitionEnd={handleDrawerTransitionEnd}
            onClose={handleDrawerClose}
            ModalProps={{
              keepMounted: true,
            }}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
          >
            {drawer}
          </Drawer>
          <Drawer
            variant="permanent"
            sx={{
              display: { xs: "none", sm: "block" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
            open
          >
            {drawer}
          </Drawer>
        </Box>
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: 3,
            width: { sm: `calc(100% - ${drawerWidth}px)` },
          }}
        >
          <Toolbar />
          {props.children}
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default ResponsiveDrawer;
ResponsiveDrawer.propTypes = {
  children: PropTypes.node,
};
