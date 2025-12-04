import React from "react";
import { Box, Typography, Divider } from "@mui/material";

// Imported sub-sections of the About page
import AboutIntro from "../components/about/AboutIntro"; 
import HiringBanner from "../components/about/HiringBanner";
import TeamSection from "../components/about/TeamSection"; 
import AppointmentInfo from "../components/about/AppointmentInfo"; 

const About = () => {
  return (
    <Box
      id="about" 
      sx={{ backgroundColor: "#F5EFE6", pb: 0 }}
    >
      {/* Introductory banner section with background image and mission statement */}
      <AboutIntro /> 

      {/* Banner to advertise open position */}
      <HiringBanner />

      {/* Team section container: therapists and heading */}
      <Box
        sx={{
          maxWidth: "1200px", // Responsive max width
          mx: "auto",         
          px: { xs: 2, sm: 3, md: 4 }, // Responsive horizontal padding
          mt: 6,              
        }}
      >
        <Typography
          variant="h2"
          align="center"
          gutterBottom
          color="#3F7C78"
          aria-label="Our Team section heading" 
        >
          Our Team
        </Typography>

        <Divider sx={{ mb: 4, bgcolor: "#D3E3DC" }} /> 

        <TeamSection /> 
      </Box>

      {/* Final section with details about what to expect at a first appointment */}
      <AppointmentInfo /> 
    </Box>
  );
};

export default About;