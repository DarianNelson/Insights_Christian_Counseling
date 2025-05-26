import React from 'react';
import { Box, Container, Typography, Button } from '@mui/material';

const Hero = () => {
  return (
    <Box
      sx={{
        backgroundImage: 'url(/images/hero.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: 'white',
        textAlign: 'center',
        py: { xs: 8, md: 12 },
      }}
    >
      <Container maxWidth="md">
        <Typography variant="h1" component="h1" fontWeight="bold" gutterBottom>
          INSIGHTS CHRISTIAN COUNSELING
        </Typography>
        <Typography variant="h3" gutterBottom>
          "He heals the brokenhearted..." - Psalm 147:3
        </Typography>
        <Typography variant="h3" sx={{ mt: 2 }}>
          We help people through anxiety, relational distress and the traumas they have experienced in life. Our mission is to create an accepting and supportive environment that helps you recognize patterns in your life that maintain your distress and find new thoughts and actions that will bring you the freedom to become the best version of yourself.
        </Typography>
        <Button
          variant="contained"
          sx={{ mt: 4, backgroundColor: '#E89072', '&:hover': { backgroundColor: '#d3795b' } }}
        >
          Schedule an Appointment
        </Button>
        <Typography variant="h4" display="block" sx={{ mt: 2 }}>
          "The Truth will set you free." - John 8:32
        </Typography>
      </Container>
    </Box>
  );
}
export default Hero;