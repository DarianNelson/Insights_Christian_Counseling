import React from 'react';
import { Container, Box } from '@mui/material';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import TherapistsIntro from '../components/TherapistIntro';
import ServicesSection from '../components/ServicesSection';
import BlogSection from '../components/BlogSection';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <Box sx={{ backgroundColor: '#F5EFE6' }}> {/* Sandy Beige background */}
        <Navbar />
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
      
        <Footer />
     </Box>
  );
};
      

export default Home;
