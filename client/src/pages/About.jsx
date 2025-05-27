import React from 'react';
import { Box, Container, Typography, Divider } from '@mui/material';
import AboutIntro from '../components/about/AboutIntro';
import TeamSection from '../components/about/TeamSection';
import AppointmentInfo from '../components/about/AppointmentInfo';

const About = () => {
  return (
    <Box sx={{ backgroundColor: '#F5EFE6', pb: 6 }}>
      <AboutIntro />

      <Container maxWidth="lg" sx={{ mt: 6 }}>
        <Typography variant="h4" align="center" gutterBottom color="#3F7C78">
          Our Team
        </Typography>
        <Divider sx={{ mb: 4, bgcolor: '#D3E3DC' }} />
        <TeamSection />
      </Container>

      <AppointmentInfo />
    </Box>
  );
};

export default About;