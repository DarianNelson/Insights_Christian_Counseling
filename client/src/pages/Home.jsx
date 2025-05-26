import React from 'react';
import { Container, Box } from '@mui/material';
import Hero from '../components/Hero';
import TherapistsIntro from '../components/TherapistIntro';
import ServicesSection from '../components/ServicesSection';
import BlogSection from '../components/BlogSection';

const Home = () => {
  return (
    <Box sx={{ backgroundColor: '#F5EFE6' }}> {/* Sandy Beige background */}
        <Hero />

        <Container maxWidth="lg" sx={{ py: 6 }}>
            <TherapistsIntro />
        </Container>

        <Container maxWidth="lg" sx={{ py: 6 }}>
            <ServicesSection />
     </Container> 
      
        <Container maxWidth="lg" sx={{ py: 6 }}>
            <BlogSection />
        </Container>
     </Box>
  );
};
      

export default Home;
