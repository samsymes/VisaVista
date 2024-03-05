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
import BreadcrumbComponent from "./BreadcrumbComponent";
import Logo from "../assets/Logo";
import { Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import {
  FlightTakeoff,
  GitHub,
  Home,
  LinkedIn,
  Person,
  ScreenSearchDesktop,
} from "@mui/icons-material";
import { PropTypes } from "prop-types";
// import { useSearchParams } from "react-router-dom";
const drawerWidth = 240;

function ResponsiveDrawer(props) {
  // const [searchParams] = useSearchParams();
  // const From = searchParams.get("From");
  // const To = searchParams.get("To");
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
      {
        <>
          <Logo /> <h7>VisaVista</h7>
        </>
      }
      <Divider />
      <List>
        {[
          { text: "Home", path: "/VisaVista" },
          { text: "Flights", path: "/VisaVista/Flights" },
          // {
          //   text: "Results",
          //   path: `/VisaVista/Results/?From=${From}&To=${To}`,
          // },
          { text: "About", path: "/VisaVista/About" },
          { text: "GitHub", path: "https://github.com/samsymes" },
          {
            text: "LinkedIn",
            path: "https://www.linkedin.com/in/samanthasymes/",
          },
          { text: "Email", path: "mailto:samasymes@gmail.com" },
        ].map((item, index) => (
          <ListItem key={item.text} id="sidebar" disablePadding>
            <NavLink to={item.path} activeClassName="activeLink">
              <ListItemButton>
                <ListItemIcon>
                  {(() => {
                    switch (index % 7) {
                      case 0:
                        return <Home />;
                      case 1:
                        return <FlightTakeoff />;
                      case 2:
                        return <ScreenSearchDesktop />;
                      case 3:
                        return <Person />;
                      case 4:
                        return <GitHub />;
                      case 5:
                        return <LinkedIn />;
                      case 6:
                        return <MailIcon />;
                      default:
                        return null;
                    }
                  })()}
                </ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItemButton>
              <Divider />
            </NavLink>
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
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
  );
}

export default ResponsiveDrawer;
ResponsiveDrawer.propTypes = {
  children: PropTypes.node,
};
