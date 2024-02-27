import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import { useState } from "react";
import Logo from "../assets/Logo";
import { Typography } from "@mui/material";
import { Link, NavLink } from "react-router-dom";
import {
  FlightTakeoff,
  GitHub,
  Home,
  LinkedIn,
  Person,
  ScreenSearchDesktop,
} from "@mui/icons-material";
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
    <div>
      <Logo id="logo" />
      <Divider />
      <List>
        {[
          { text: "Home", path: props.homePath },
          { text: "Flights", path: props.flightPath },
          { text: "Results", path: props.resultsPath },
        ].map((item, index) => (
          <ListItem key={item.text} disablePadding>
            <Link to={item.path}>
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
            </Link>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {[
          { text: "About", path: props.aboutPath },
          { text: "GitHub", path: props.gitHubPath },
          {
            text: "LinkedIn",
            path: props.linkinInPath,
          },
          { text: "Email", path: props.emailPath },
        ].map((item, index) => (
          <ListItem key={item.text} disablePadding>
            <NavLink to={item.path}>
              <ListItemButton>
                <ListItemIcon>
                  {(() => {
                    switch (index % 4) {
                      case 0:
                        return <Person />;
                      case 1:
                        return <GitHub />;
                      case 2:
                        return <LinkedIn />;
                      case 3:
                        return <MailIcon />;

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
    </div>
  );

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
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
            VisaVista
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
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

        <Toolbar />
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Typography paragraph>{props.children}</Typography>
      </Box>
    </Box>
  );
}

export default ResponsiveDrawer;
ResponsiveDrawer.propTypes = {
  homePath: PropTypes.string,
  flightPath: PropTypes.string,
  resultsPath: PropTypes.string,
  aboutPath: PropTypes.string,
  gitHubPath: PropTypes.string,
  linkinInPath: PropTypes.string,
  emailPath: PropTypes.string,
  children: PropTypes.node,
};
