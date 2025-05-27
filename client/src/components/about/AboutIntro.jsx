import React from 'react';
import { Box, Typography, Container } from '@mui/material';

const AboutIntro = () => {
  return (
    <Box sx={{ backgroundColor: '#E89072', py: 6 }}>
      <Container maxWidth="md">
        <Typography variant="h2" align="center" color="white" gutterBottom>
          About Christian Counseling
        </Typography>
        <Typography variant="h3" color="white" paragraph align="center">
            Some have asked “What is Christian Counseling?” Our therapists provide professional mental health therapy in a non-judgemental and compassionate manner. We endeavor to create an environment that is safe and welcoming to all people.
        </Typography>
        <Typography variant="h3" color="white" paragraph align="center">
            What makes us “Christian” is that we hold ourselves accountable to biblical Christian values. We are willing to explain how our treatment parallels biblical teachings and we will include prayer and scripture for clients who want that. 
        </Typography>
        <Typography variant="h3" color="white" align="center">
            We are willing to help people who want to explore faith. Our role is supportive of spiritual development rather than neglectful or forceful.        </Typography>
      </Container>
    </Box>
  );
};

export default AboutIntro;