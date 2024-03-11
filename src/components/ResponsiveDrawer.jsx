import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";

import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import LinkedinIcon from "../assets/icons/LinkedinIcon";
import GithubIcon from "../assets/icons/GithubIcon";
import ProfilePic from "../assets/ProfilePic";
import EmailIcon from "../assets/icons/EmailIcon";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import { useState } from "react";
import BreadcrumbComponent from "./BreadcrumbComponent";
import Logo from "../assets/Logo";
import { ThemeProvider, Typography, createTheme } from "@mui/material";
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
    <div id="sidebar">
      {
        <>
          <Logo /> <h7>VisaVista</h7>
        </>
      }

      <List>
        {[
          { text: "Home", path: "/VisaVista" },
          { text: "Flights", path: "/VisaVista/Flights" },
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
        <Typography>
          Built by <br />
          <ProfilePic id="profilePicSideBar" /> Sam Symes <br />
          <div className="icons">
            <GithubIcon />
            <LinkedinIcon />
            <EmailIcon />
          </div>
        </Typography>
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
              <Typography variant="h6" noWrap component="div">
                <BreadcrumbComponent />
              </Typography>
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
          <Typography paragraph>{props.children}</Typography>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default ResponsiveDrawer;
ResponsiveDrawer.propTypes = {
  children: PropTypes.node,
};
