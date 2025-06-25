import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Container, Box } from "@mui/material";

// Section components imported for homepage layout
import Hero from "../components/home/Hero";
import TherapistsIntro from "../components/home/TherapistIntro";
import ServicesSection from "../components/home/ServicesSection";
// import BlogSection from "../components/home/BlogSection";
import ResourcePageSection from "../components/home/ResourcePageSection";
import ContactPageSection from "../components/home/ContactPageSection";

// Main homepage component
const Home = () => {
  const location = useLocation();

  useEffect(() => {
    // If the URL contains a hash (e.g., /#contact), scroll smoothly to that section
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const el = document.getElementById(id); // matches component id
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth", block: "start" }); // ensures smooth scroll to anchor
        }, 100); // Delay ensures target element is rendered before scrolling
      }
    }
  }, [location]);

  return (
    <Box
      component="main"
      sx={{ backgroundColor: "#F5EFE6" }} 
      aria-label="Homepage main content" 
    >
      {/* Hero image and headline */}
      <Hero />

      {/* Therapist introduction section */}
      <Container
        maxWidth="lg"
        sx={{ py: 6 }}
        aria-label="Therapist introduction section" 
      >
        <TherapistsIntro />
      </Container>

      {/* Services highlight section */}
      <Container
        maxWidth="lg"
        sx={{ py: 6 }}
        aria-label="List of counseling services we offer" 
      >
        <ServicesSection />
      </Container>

      {/* Blog article previews */}
      {/* <Container
        maxWidth="lg"
        sx={{ py: 6 }}
        aria-label="Recent blog posts" 
      >
        <BlogSection />
      </Container> */}

      {/* Resource links and recommended content */}
      <Box id="resources" sx={{ py: 6 }} aria-label="Community and reading resources"> 
        <ResourcePageSection />
      </Box>

      {/* Contact form and map section */}
      <Container
        id="contact"
        maxWidth="lg"
        sx={{ py: 6 }}
        aria-label="Contact information and inquiry form" 
      >
        <ContactPageSection />
      </Container>
    </Box>
  );
};

export default Home;