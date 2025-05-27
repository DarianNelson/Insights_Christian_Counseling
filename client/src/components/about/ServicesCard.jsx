import React from 'react';
import { Box, Typography, List, ListItem, ListItemText } from '@mui/material';

const ServicesCard = ({ services }) => {
  return (
    <Box mb={2}>
      <Typography variant="subtitle1" gutterBottom color="#3F7C78">
        Services
      </Typography>
      <List dense>
        {services.map((service, idx) => (
          <ListItem key={idx} sx={{ py: 0 }}>
            <ListItemText primary={service} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default ServicesCard;