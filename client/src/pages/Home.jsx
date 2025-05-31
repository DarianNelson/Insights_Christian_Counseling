import React from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Container, Box } from "@mui/material";
import Hero from "../components/home/Hero";
import TherapistsIntro from "../components/home/TherapistIntro";
import ServicesSection from "../components/home/ServicesSection";
import BlogSection from "../components/home/BlogSection";
import ResourcePageSection from "../components/home/ResourcePageSection";
import ContactPageSection from "../components/home/ContactPageSection";

const Home = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const el = document.getElementById(id);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 100); // Slight delay to ensure DOM is rendered
      }
    }
  }, [location]);

  return (
    <Box component ="main" sx={{ backgroundColor: "#F5EFE6" }}>
      {" "}
      {/* Sandy Beige background */}
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
      <Box id="resources" sx={{ py: 6 }}>
        <ResourcePageSection />
      </Box>
      <Container id="contact" maxWidth="lg" sx={{ py: 6 }}>
        <ContactPageSection />
      </Container>
    </Box>
  );
};

export default Home;
