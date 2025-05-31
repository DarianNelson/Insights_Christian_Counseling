import React from "react";
import { Box, Typography, Container } from "@mui/material";
import AboutHeroImg from "../../assets/images/About/about_hero.jpg";

const AboutIntro = () => {
  return (
    // Main container with background image and accessible label
    <Box
      id="aboutIntro"
      role="img"
      aria-label="Peach beach background"
      sx={{
        position: "relative",
        backgroundImage: `url(${AboutHeroImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "white",
        py: { xs: 10, md: 14 },
        px: 2,
        minHeight: { xs: "auto", md: "75vh" },
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      {/* Overlay to darken background for better text readability */}
      <Box
        id="aboutIntroOverlay"
        sx={{
          position: "absolute",
          inset: 0,
          bgcolor: "rgba(211, 135, 117, 0.4)", // dusty rose overlay
          zIndex: 1,
        }}
      />

      {/* Content container */}
      <Container
        id="aboutIntroContent"
        maxWidth="lg"
        sx={{ position: "relative", zIndex: 2 }}
      >
        {/* Box with semi-transparent background for contrast */}
        <Box
          sx={{
            backgroundColor: "rgba(0, 0, 0, 0.3)",
            p: { xs: 3, md: 6 },
            borderRadius: 2,
          }}
        >
          {/* Heading */}
          <Typography
            variant="h2"
            gutterBottom
            sx={{
              color: "#FFFDF9",
              fontSize: { xs: "2.5rem", md: "3.5rem" },
              fontWeight: 700,
              lineHeight: 1.3,
              textShadow: "0 2px 6px rgba(0, 0, 0, 0.6)",
            }}
          >
            About Christian Counseling
          </Typography>

          {/* Description paragraphs */}
          {[
            "Some have asked “What is Christian Counseling?” Our therapists provide professional mental health therapy in a non-judgemental and compassionate manner. We endeavor to create an environment that is safe and welcoming to all people.",
            "What makes us “Christian” is that we hold ourselves accountable to biblical Christian values. We are willing to explain how our treatment parallels biblical teachings and we will include prayer and scripture for clients who want that.",
            "We are willing to help people who want to explore faith. Our role is supportive of spiritual development rather than neglectful or forceful.",
          ].map((text, i) => (
            <Typography
              key={i}
              variant="h6"
              paragraph
              sx={{
                color: "#FFFDF9",
                fontSize: { xs: "1.35rem", md: "1.6rem" },
                lineHeight: 1.9,
                fontWeight: 500,
                textShadow: "0 2px 6px rgba(0, 0, 0, 0.6)",
              }}
            >
              {text}
            </Typography>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default AboutIntro;