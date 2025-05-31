import React from "react";
import { Box, Typography, Container } from "@mui/material";
import AboutHeroImg from "../../assets/images/About/about_hero.jpg";

const AboutIntro = () => {
  return (
    <Box
      id = "aboutIntro"
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
      {/* Overlay */}
      <Box
        id="aboutIntroOverlay"
        sx={{
          position: "absolute",
          inset: 0,
          bgcolor: "rgba(211, 135, 117, 0.4)",
          zIndex: 1,
        }}
      />

      {/* Content */}
      <Container id="aboutIntroContent" maxWidth="lg" sx={{ position: "relative", zIndex: 2 }}>
        <Box
          sx={{
            backgroundColor: "rgba(0, 0, 0, 0.3)",
            p: { xs: 3, md: 6 },
            borderRadius: 2,
          }}
        >
          <Typography
            variant="h2"
            gutterBottom
            sx={{
              color: "#FFFDF9", // same as body text
              fontSize: { xs: "2.5rem", md: "3.5rem" }, // bigger for standout
              fontWeight: 700, // bold for emphasis
              lineHeight: 1.3,
              textShadow: "0 2px 6px rgba(0, 0, 0, 0.6)", // same shadow as body
            }}
          >
            About Christian Counseling
          </Typography>

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
