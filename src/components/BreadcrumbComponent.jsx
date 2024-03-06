import PropTypes from "prop-types";

import Link from "@mui/material/Link";

import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import { Link as RouterLink, useLocation } from "react-router-dom";

const breadcrumbNameMap = {
  "/VisaVista": "Home",
  "/VisaVista/Results": "Results",
  "/VisaVista/Flights": "Flights",
  "/VisaVista/About": "About",
};

function ListItemLink(props) {
  const { to, open, ...other } = props;
  const primary = breadcrumbNameMap[to];

  let icon = null;
  if (open != null) {
    icon = open ? <ExpandLess /> : <ExpandMore />;
  }

  return (
    <li>
      <ListItemButton component={RouterLink} to={to} {...other}>
        <ListItemText primary={primary} />
        {icon}
      </ListItemButton>
    </li>
  );
}

ListItemLink.propTypes = {
  open: PropTypes.bool,
  to: PropTypes.string.isRequired,
};

function LinkRouter(props) {
  return <Link {...props} component={RouterLink} />;
}

export default function BreadcrumbComponent() {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  return (
    <Breadcrumbs aria-label="breadcrumb">
      {pathnames.map((value, index) => {
        const last = index === pathnames.length - 1;
        const to = `/${pathnames.slice(0, index + 1).join("/")}`;

        return last ? (
          <Typography color="text.primary" key={to}>
            {breadcrumbNameMap[to]}
          </Typography>
        ) : (
          <LinkRouter underline="hover" color="inherit" to={to} key={to}>
            {breadcrumbNameMap[to]}
          </LinkRouter>
        );
      })}
    </Breadcrumbs>
  );
}
