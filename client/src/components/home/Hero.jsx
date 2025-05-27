import React from 'react';
//import { Link } from 'react-router-dom';
import { Box, Container, Typography, Button } from '@mui/material';
import HeroImg from '../../assets/images/Hero/hero.jpg';

const Hero = () => {
  return (
    <Box
      sx={{
        backgroundImage: `url(${HeroImg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: 'white',
        minHeight: '80vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        px: 2
      }}
    >
      <Container maxWidth="md">
        <Typography variant="h1" component="h1" fontWeight="bold" gutterBottom>
          INSIGHTS CHRISTIAN COUNSELING
        </Typography>
        <Typography variant="h3" color='#F5EFE6' gutterBottom>
          "He heals the brokenhearted..." - Psalm 147:3
        </Typography>
        <Typography variant="h3" sx={{ mt: 2, opacity: 0.77 }}>
          We help people through anxiety, relational distress and the traumas they have experienced in life. Our mission is to create an accepting and supportive environment that helps you recognize patterns in your life that maintain your distress and find new thoughts and actions that will bring you the freedom to become the best version of yourself.
        </Typography>
        
        {/* Need to add link around Button with contact form */}
        <Button
          variant="contained"
          sx={{ 
            mt: 6, 
            px: 5, 
            py: 1.5, 
            fontSize: '1.3rem',
            fontFamily: 'Poppins',
            borderRadius: '999px', //pill shape
            backgroundColor: '#E89072', 
            '&:hover': { backgroundColor: '#d3795b' } 
          }}
        >
          Schedule an Appointment
        </Button>

        <Typography variant="h3" color='#3A3A3A' display="block" sx={{ mt: 2 }}>
          "The Truth will set you free." - John 8:32
        </Typography>
      </Container>
    </Box>
  );
}
export default Hero;