import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Button,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Logo from "../assets/images/Logo/Insights_Logo.png";

// Navigation items with routes or external links
const navItems = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/#resources", label: "Resources" },
  { to: "/#contact", label: "Contact" },
  {
    to: "https://insightschristiancounseling.clientsecure.me/sign-in",
    label: "Client Portal",
    external: true,
  },
];

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const navigate = useNavigate();
  const location = useLocation();

  const handleHomeClick = (event) => {
    event.preventDefault();
    if (location.pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      navigate("/");
    }
  };

  // Render a nav item for desktop or drawer
  const renderNavItem = (item, isDrawer = false) => {
    const commonStyles = {
      color: "#3A3A3A",
      textTransform: "none",
    };

    const handleClick = (e) => {
      if (item.to === "/") {
        e.preventDefault();
        handleHomeClick(e);
      }
      if (isDrawer) setDrawerOpen(false);
    };

    if (item.external) {
      const externalProps = {
        component: "a",
        href: item.to,
        target: "_blank",
        rel: "noopener noreferrer",
        "aria-label": `Go to ${item.label}`,
        sx: commonStyles,
      };

      return isDrawer ? (
        <ListItemButton {...externalProps} onClick={() => setDrawerOpen(false)}>
          <ListItemText primary={item.label} sx={{ color: "#3A3A3A" }} />
        </ListItemButton>
      ) : (
        <Button {...externalProps}>{item.label}</Button>
      );
    }

    if (item.to === "/") {
      return isDrawer ? (
        <ListItemButton
          onClick={(e) => {
            handleClick(e);
          }}
          component={Link}
          to="/"
          aria-label="Home"
        >
          <ListItemText primary={item.label} sx={{ color: "#3A3A3A" }} />
        </ListItemButton>
      ) : (
        <Button
          onClick={handleClick}
          aria-label="Home"
          sx={{
            ...commonStyles,
            fontSize: "1.1rem",
            "&:hover": {
              backgroundColor: "#E89072",
              color: "#FFFFFF",
            },
          }}
        >
          {item.label}
        </Button>
      );
    }

    if (item.to.startsWith("/#")) {
      return isDrawer ? (
        <ListItemButton
          component="a"
          href={item.to}
          onClick={() => setDrawerOpen(false)}
          aria-label={`Go to ${item.label}`}
        >
          <ListItemText primary={item.label} sx={{ color: "#3A3A3A" }} />
        </ListItemButton>
      ) : (
        <Button
          component="a"
          href={item.to}
          aria-label={`Go to ${item.label}`}
          sx={{
            ...commonStyles,
            fontSize: "1.1rem",
            "&:hover": {
              backgroundColor: "#E89072",
              color: "#FFFFFF",
            },
          }}
        >
          {item.label}
        </Button>
      );
    }

    return isDrawer ? (
      <ListItemButton
        component={Link}
        to={item.to}
        onClick={() => setDrawerOpen(false)}
        aria-label={`Go to ${item.label}`}
      >
        <ListItemText primary={item.label} sx={{ color: "#3A3A3A" }} />
      </ListItemButton>
    ) : (
      <Button
        component={Link}
        to={item.to}
        aria-label={`Go to ${item.label}`}
        sx={{
          ...commonStyles,
          fontSize: "1.1rem",
          "&:hover": {
            backgroundColor: "#E89072",
            color: "#FFFFFF",
          },
        }}
      >
        {item.label}
      </Button>
    );
  };

  return (
    <>
      <AppBar
        component="nav"
        aria-label="Main site navigation"
        position="sticky"
        sx={{
          backgroundColor: "#F5EFE6",
          boxShadow: "none",
          zIndex: (theme) => theme.zIndex.drawer + 1,
        }}
      >
        <Toolbar sx={{ justifyContent: "space-between" }}>
          {/* Logo */}
          <Box
            component="a"
            href="/"
            onClick={handleHomeClick}
            sx={{
              display: "flex",
              alignItems: "center",
              textDecoration: "none",
              cursor: "pointer",
            }}
            aria-label="Go to homepage"
          >
            <Box
              component="img"
              src={Logo}
              alt="Insights Christian Counseling logo"
              sx={{
                height: { xs: 40, md: 70 },
              }}
            />
          </Box>

          {/* Desktop Navigation */}
          {!isMobile && (
            <Box sx={{ display: "flex", gap: 2 }}>
              {navItems.map((item) => (
                <React.Fragment key={`${item.to}-${item.label}`}>
                  {renderNavItem(item)}
                </React.Fragment>
              ))}
            </Box>
          )}

          {/* Mobile Menu Icon */}
          {isMobile && (
            <IconButton
              edge="end"
              color="inherit"
              onClick={() => setDrawerOpen(true)}
              sx={{ color: "#3A3A3A" }}
              aria-label="Open menu"
            >
              <MenuIcon />
            </IconButton>
          )}
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer Menu */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        aria-label="Mobile navigation menu"
        ModalProps={{ keepMounted: true }}
        PaperProps={{
          sx: {
            backgroundColor: "#F5EFE6",
            width: 250,
            height: "100vh",
            overflowY: "auto",
          },
        }}
      >
        <Box role="presentation" aria-label="Navigation drawer content">
          <List>
            {navItems.map((item) => (
              <ListItem key={`${item.to}-${item.label}`} disablePadding>
                {renderNavItem(item, true)}
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
};

export default Navbar;