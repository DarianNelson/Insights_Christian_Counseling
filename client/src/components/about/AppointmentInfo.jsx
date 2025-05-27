import React from 'react';
import { Box, Container, Typography, Button } from '@mui/material';

const AppointmentInfo = () => {
  return (
    <Box sx={{ backgroundColor: '#FAF9F7', py: 6, mt: 8 }}>
      <Container maxWidth="md">
        <Typography variant="h5" align="center" gutterBottom color="#D38775">
          What to Expect at Your First Appointment
        </Typography>
        <Typography align="center" paragraph>
          Starting therapy can feel like a big step, and we want you to feel as comfortable as possible...
        </Typography>
        <Box textAlign="center" mt={4}>
          <Button variant="contained" sx={{ backgroundColor: '#E89072', '&:hover': { backgroundColor: '#d0765f' } }}>
            Schedule an Appointment
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default AppointmentInfo;