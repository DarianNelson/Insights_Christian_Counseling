import React from "react";
import { Box, Container, Typography, Button } from "@mui/material";
import HeroImg from "../../assets/images/Hero/hero.jpg";

const Hero = () => {
  return (
    <Box
      sx={{
        backgroundImage: `url(${HeroImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "white",
        minHeight: "80vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        px: 2,
        py: { xs: 8, md: 12 },
      }}
    >
      <Container maxWidth="md">
        <Typography
          variant="h1"
          gutterBottom
          sx={{
            fontSize: { xs: "2rem", sm: "2.75rem", md: "3rem" },
          }}
        >
          INSIGHTS CHRISTIAN COUNSELING
        </Typography>

        <Typography
          variant="h3"
          gutterBottom
          sx={{
            color: "text.secondary",
            fontSize: { xs: "1.25rem", sm: "1.5rem" },
          }}
        >
          "He heals the brokenhearted..." – Psalm 147:3
        </Typography>

        <Typography
          variant="body1"
          sx={{
            mt: 3,
            color: "#FAF9F7",
            textShadow: "1px 1px 3px rgba(0,0,0,0.4)",
            lineHeight: 1.75,
            fontSize: {
              xs: "1.25rem", // phones
              sm: "1.375rem", // tablets/small laptops
              md: "1.5rem", // desktops and up
            },
          }}
        >
          We help people through anxiety, relational distress and the traumas
          they have experienced in life. Our mission is to create an accepting
          and supportive environment that helps you recognize patterns in your
          life that maintain your distress and find new thoughts and actions
          that will bring you the freedom to become the best version of
          yourself.
        </Typography>

        <Button
          variant="contained"
          component="a"
          href="https://your-hushmail-form-link.com"
          target="_blank"
          rel="noopener noreferrer"
          color="secondary"
          sx={{
            mt: 6,
            fontSize: "1.1rem",
            px: 5,
            py: 1.5,
            fontFamily: "Poppins",
          }}
        >
          Schedule an Appointment
        </Button>

        <Typography
          variant="h3"
          sx={{
            mt: 4,
            color: "text.primary",
          }}
        >
          "The Truth will set you free." – John 8:32
        </Typography>
      </Container>
    </Box>
  );
};

export default Hero;
