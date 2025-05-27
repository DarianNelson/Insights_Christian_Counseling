import React from 'react';
import { Box, Typography, List, ListItem, ListItemText } from '@mui/material';

const FeesInsuranceCard = ({ fees, insurance }) => {
  return (
    <Box>
      <Typography variant="subtitle1" gutterBottom color="#3F7C78">
        Fees & Insurance
      </Typography>
      <Typography variant="body2" paragraph>
        {fees}
      </Typography>
      {insurance && insurance.length > 0 && (
        <List dense>
          {insurance.map((plan, idx) => (
            <ListItem key={idx} sx={{ py: 0 }}>
              <ListItemText primary={plan} />
            </ListItem>
          ))}
        </List>
      )}
    </Box>
  );
};

export default FeesInsuranceCard;