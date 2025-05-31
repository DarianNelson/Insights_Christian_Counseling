import React from "react";
import { Box, Typography, Divider } from "@mui/material";
import AboutIntro from "../components/about/AboutIntro";
import TeamSection from "../components/about/TeamSection";
import AppointmentInfo from "../components/about/AppointmentInfo";

const About = () => {

  return (
    <Box id="about" sx={{ backgroundColor: "#F5EFE6", pb: 0 }}>
      <AboutIntro />

      <Box
        sx={{
          maxWidth: "1200px",
          mx: "auto",
          px: { xs: 2, sm: 3, md: 4 },
          mt: 6,
        }}
      >
        <Typography variant="h2" align="center" gutterBottom color="#3F7C78">
          Our Team
        </Typography>
        <Divider sx={{ mb: 4, bgcolor: "#D3E3DC" }} />
        <TeamSection />
      </Box>

      <AppointmentInfo />
    </Box>
  );
};

export default About;
