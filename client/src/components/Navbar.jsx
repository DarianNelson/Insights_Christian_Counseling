import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom"; // <-- import hooks
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

const navItems = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/#resources", label: "Resources" },
  { to: "/blog", label: "Blog" },
  { to: "/#contact", label: "Contact" },
  { to: "/portal", label: "Client Portal" },
];

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const navigate = useNavigate();
  const location = useLocation();

  // Custom handler for logo and home button click
  const handleHomeClick = (event) => {
    event.preventDefault();
    if (location.pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      navigate("/");
    }
    setDrawerOpen(false); // close drawer if mobile
  };

  return (
    <>
      <AppBar
        position="sticky"
        sx={{
          backgroundColor: "#F5EFE6",
          boxShadow: "none",
          zIndex: (theme) => theme.zIndex.drawer + 1,
        }}
      >
        <Toolbar sx={{ justifyContent: "space-between" }}>
          {/* Logo with click handler */}
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
          >
            <Box
              component="img"
              src={Logo}
              alt="Insights Logo"
              sx={{
                height: { xs: 40, md: 70 }, // 40px on mobile, 70px on medium+ screens
              }}
            />
          </Box>

          {/* Desktop Nav */}
          {!isMobile && (
            <Box sx={{ display: "flex", gap: 2 }}>
              {navItems.map((item) =>
                item.to === "/" ? (
                  // For Home button, use same click handler
                  <Button
                    key={item.to}
                    onClick={handleHomeClick}
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

          {/* Mobile Menu Button */}
          {isMobile && (
            <IconButton
              edge="end"
              color="inherit"
              onClick={() => setDrawerOpen(true)}
              sx={{ color: "#3A3A3A" }}
              aria-label="menu"
            >
              <MenuIcon />
            </IconButton>
          )}
        </Toolbar>
      </AppBar>

      {/* Drawer for Mobile Nav */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        ModalProps={{
          keepMounted: true, // Improves performance on mobile
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
        <Box role="presentation" onClick={() => setDrawerOpen(false)}>
          <List>
            {navItems.map((item) => (
              <ListItem key={item.to} disablePadding>
                {item.to === "/" ? (
                  <ListItemButton onClick={handleHomeClick}>
                    <ListItemText
                      primary={item.label}
                      sx={{ color: "#3A3A3A" }}
                    />
                  </ListItemButton>
                ) : item.to.startsWith("/#") ? (
                  <ListItemButton component="a" href={item.to}>
                    <ListItemText
                      primary={item.label}
                      sx={{ color: "#3A3A3A" }}
                    />
                  </ListItemButton>
                ) : (
                  <ListItemButton component={Link} to={item.to}>
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
