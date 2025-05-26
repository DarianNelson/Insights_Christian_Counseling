import React from 'react';
import { AppBar, Toolbar, Button } from '@mui/material'; //box?

const Navbar = () => {
  return (
    <AppBar position="static" color="transparent" elevation={0}>
      <Toolbar sx={{ justifyContent: 'center', gap: 2 }}>
        {['Home', 'About', 'Resources', 'Blog', 'Contact', 'Client Portal'].map(label => (
          <Button key={label} color="inherit">{label}</Button>
        ))}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;