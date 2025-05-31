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
import Logo from "../assets/images/Logo/Insights_Logo.PNG";

// Array of navigation items with their routes
const navItems = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/#resources", label: "Resources" },
  { to: "/blog", label: "Blog" },
  { to: "/#contact", label: "Contact" },
  { to: "/portal", label: "Client Portal" },
];

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false); // For mobile menu drawer
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md")); // Responsive trigger

  const navigate = useNavigate();
  const location = useLocation();

  // Handles Home button or logo click
  const handleHomeClick = (event) => {
    event.preventDefault();
    if (location.pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      navigate("/");
    }
    setDrawerOpen(false); // Close mobile drawer if open
  };

  return (
    <>
      {/* Top-level navigation bar */}
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
          {/* Logo linking to home */}
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
                height: { xs: 40, md: 70 }, // Responsive sizing
              }}
            />
          </Box>

          {/* Desktop Navigation Menu */}
          {!isMobile && (
            <Box sx={{ display: "flex", gap: 2 }}>
              {navItems.map((item) =>
                item.to === "/" ? (
                  <Button
                    key={item.to}
                    onClick={handleHomeClick}
                    aria-label="Home" 
                    sx={{
                      color: "#3A3A3A",
                      fontSize: "1.1rem",
                      textTransform: "none",
                      "&:hover": {
                        backgroundColor: "#E89072",
                        color: "#FFFFFF",
                      },
                    }}
                  >
                    {item.label}
                  </Button>
                ) : item.to.startsWith("/#") ? (
                  <Button
                    key={item.to}
                    component="a"
                    href={item.to}
                    aria-label={`Go to ${item.label}`} 
                    sx={{
                      color: "#3A3A3A",
                      fontSize: "1.1rem",
                      textTransform: "none",
                      "&:hover": {
                        backgroundColor: "#E89072",
                        color: "#FFFFFF",
                      },
                    }}
                  >
                    {item.label}
                  </Button>
                ) : (
                  <Button
                    key={item.to}
                    component={Link}
                    to={item.to}
                    aria-label={`Go to ${item.label}`} 
                    sx={{
                      color: "#3A3A3A",
                      fontSize: "1.1rem",
                      textTransform: "none",
                      "&:hover": {
                        backgroundColor: "#E89072",
                        color: "#FFFFFF",
                      },
                    }}
                  >
                    {item.label}
                  </Button>
                )
              )}
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
        ModalProps={{
          keepMounted: true, // Keeps drawer in the DOM when closed to improve performance and preserve state on mobile
        }}
        PaperProps={{
          sx: {
            backgroundColor: "#F5EFE6",
            width: 250,
            height: "100vh",
            overflowY: "auto",
          },
        }}
      >
        <Box
          role="presentation"
          onClick={() => setDrawerOpen(false)}
          aria-label="Navigation drawer content" 
        >
          <List>
            {navItems.map((item) => (
              <ListItem key={item.to} disablePadding>
                {item.to === "/" ? (
                  <ListItemButton
                    onClick={handleHomeClick}
                    aria-label="Home" 
                  >
                    <ListItemText
                      primary={item.label}
                      sx={{ color: "#3A3A3A" }}
                    />
                  </ListItemButton>
                ) : item.to.startsWith("/#") ? (
                  <ListItemButton
                    component="a"
                    href={item.to}
                    aria-label={`Go to ${item.label}`} 
                  >
                    <ListItemText
                      primary={item.label}
                      sx={{ color: "#3A3A3A" }}
                    />
                  </ListItemButton>
                ) : (
                  <ListItemButton
                    component={Link}
                    to={item.to}
                    aria-label={`Go to ${item.label}`} 
                  >
                    <ListItemText
                      primary={item.label}
                      sx={{ color: "#3A3A3A" }}
                    />
                  </ListItemButton>
                )}
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
};

export default Navbar;