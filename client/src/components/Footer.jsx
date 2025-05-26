import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer = () => (
  <Box sx={{ textAlign: 'center', py: 2, bgcolor: '#FAF9F7', mt: 4 }}>
    <Typography variant="body2" color="text.secondary">
      &copy; {new Date().getFullYear()} Insights Christian Counseling. All rights reserved.
    </Typography>
  </Box>
);

export default Footer;