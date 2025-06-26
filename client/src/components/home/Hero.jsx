import React from "react";
import { Box, Container, Typography, Button } from "@mui/material";
import HeroImg from "../../assets/images/Hero/hero.jpg";

// Hero component: displays homepage banner with background image, mission statement, verses, and CTA
const Hero = () => {
  return (
    <Box
      role="banner"
      aria-label="Homepage hero section"
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
        {/* SITE TITLE */}
        <Typography
          variant="h1"
          gutterBottom
          sx={{
            fontSize: { xs: "2rem", sm: "2.75rem", md: "3rem" },
            color: "#FAF9F7",
          }}
        >
          INSIGHTS CHRISTIAN COUNSELING
        </Typography>

        {/* OPENING SCRIPTURE QUOTE */}
        <Typography
          variant="h3"
          gutterBottom
          aria-label='Scripture: "He heals the brokenhearted..." from Psalm 147:3'
          sx={{
            color: "text.secondary",
            fontSize: { xs: "1.25rem", sm: "1.5rem" },
          }}
        >
          "He heals the brokenhearted..." – Psalm 147:3
        </Typography>

        {/* MISSION STATEMENT PARAGRAPH WITH MOBILE-ONLY OVERLAY */}
        <Box
          sx={{
            backgroundColor: {
              xs: "rgba(0, 50, 80, 0.25)",  // Mobile overlay
              md: "transparent",
            },
            borderRadius: 1,
            px: { xs: 2, sm: 3 },
            py: { xs: 2, sm: 2 },
            mt: 3,
          }}
        >
          <Typography
            variant="body1"
            sx={{
              color: "#FAF9F7",
              textShadow: "1px 1px 3px rgba(0,0,0,0.4)",
              lineHeight: 1.75,
              fontSize: {
                xs: "1.25rem",
                sm: "1.375rem",
                md: "1.5rem",
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
        </Box>

        {/* CALL TO ACTION BUTTON */}
        <Button
          variant="contained"
          component="a"
          href="https://hushforms.com/insightschristiancounseling"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Schedule an appointment through secure form"
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

        {/* CLOSING SCRIPTURE QUOTE */}
        <Typography
          variant="h3"
          aria-label='Scripture: "The Truth will set you free." from John 8:32'
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