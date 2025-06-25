import React from "react";
import { Box, Container, Typography, Button, Grid } from "@mui/material";

// Image imports
import CompassionImg from "../../assets/images/About/compassion.jpg";
import ConnectImg from "../../assets/images/About/connect.jpg";
import FaithImg from "../../assets/images/About/faith.jpg";
import FormsImg from "../../assets/images/About/forms.png";
import LookingImg from "../../assets/images/About/looking_ahead.jpg";
import StoryImg from "../../assets/images/About/story.jpg";
import TimeImg from "../../assets/images/About/time.jpg";
import FirstAptImg from "../../assets/images/About/first_appointment.jpg";

// Reusable card component for each info section
const SectionCard = ({ title, text, imgSrc }) => (
  <Box sx={{ backgroundColor: "#FAF9F7", borderRadius: 2, p: 4, mb: 6 }}>
    <Grid
      container
      spacing={4}
      alignItems="flex-start"
      sx={{ flexWrap: { xs: "wrap", sm: "nowrap" } }}
      role="region"
      aria-labelledby={title.replace(/\s/g, "-").toLowerCase()}
    >
      {/* Image section */}
      {imgSrc && (
        <Grid item xs={12} sm={4} sx={{ flexShrink: 0 }}>
          <Box
            component="img"
            src={imgSrc}
            alt={`${title} illustration`}
            sx={{
              width: 200,
              height: 200,
              borderRadius: 2,
              objectFit: "cover",
              display: "block",
              mx: { xs: "auto", sm: 0 },
            }}
          />
        </Grid>
      )}

      {/* Text section */}
      <Grid item xs={12} sm={8}>
        <Typography
          id={title.replace(/\s/g, "-").toLowerCase()}
          variant="h3"
          gutterBottom
          sx={{ color: "#D38775", fontWeight: 600 }}
        >
          {title}
        </Typography>
        <Typography paragraph sx={{ color: "#3A3A3A" }}>
          {text}
        </Typography>
      </Grid>
    </Grid>
  </Box>
);

// Main component
const AppointmentInfo = () => {
  return (
    <>
      {/* HERO SECTION: Background image with intro */}
      <Box
        id="first-appointment"
        aria-label="Introductory information about your first appointment"
        sx={{
          backgroundImage: `url('${FirstAptImg}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: { xs: 280, md: 340 },
          px: 2,
          mb: 0,
          py: { xs: 4, md: 6 },
          textAlign: "center",
          color: "#3A3A3A",
        }}
      >
        <Box
          sx={{
            backgroundColor: "rgba(255, 255, 255, 0.7)",
            p: { xs: 2, sm: 4 },
            borderRadius: 2,
            maxWidth: 800,
          }}
        >
          <Typography
            variant="h2"
            fontWeight="bold"
            gutterBottom
            sx={{
              color: "#3A3A3A",
              fontSize: { xs: "1.6rem", sm: "2rem", md: "2.2rem" },
            }}
          >
            What to Expect at Your First Appointment
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontSize: { xs: "1.1rem", sm: "1.2rem", md: "1.25rem" },
              fontWeight: 400,
              lineHeight: 1.6,
              color: "#3A3A3A",
            }}
          >
            At <strong>Insights Christian Counseling</strong>, we understand
            that taking the first step toward therapy can feel both hopeful and
            uncertain. Whether you're navigating anxiety, trauma, OCD, or a
            major life change, our goal is to make your first session feel safe,
            welcoming, and centered on you.
          </Typography>
        </Box>
      </Box>

      {/* MAIN INFO SECTION: Appointment details */}
      <Box sx={{ backgroundColor: "#BFDAD5", py: 6, mt: 0 }}>
        <Container maxWidth="md">
          <SectionCard
            title="Session Length and Format"
            text="Your first session will be 60 minutes, giving us plenty of time to explore your story without feeling rushed. We offer sessions in-person or virtually, so you can choose what works best for your comfort and schedule."
            imgSrc={TimeImg}
          />
          <SectionCard
            title="Before Your Appointment"
            text="You’ll receive a digital intake packet through our Simple Practice client portal. This includes some basic forms and a few symptom questionnaires, which help us prepare thoughtfully for your first meeting. Please complete all forms before your appointment so we can focus fully on you during our time together."
            imgSrc={FormsImg}
          />
          <SectionCard
            title="Converse & Connect"
            text="This session is all about beginning a relationship of trust. We’ll talk through what brought you to counseling, how you're feeling, and what you’re hoping to gain. It’s not a checklist or interrogation—it’s a conversation, and you set the pace. We’re here to listen, not rush."
            imgSrc={ConnectImg}
          />
          <SectionCard
            title="Faith is Always Your Choice"
            text="As Christian counselors, we’re happy to include faith and spirituality in your counseling—only if that’s something you desire. We also welcome clients of all backgrounds, including those who don’t identify with any faith. Wherever you’re coming from, this is your space."
            imgSrc={FaithImg}
          />
          <SectionCard
            title="Clinical Insight with Compassion"
            text="We specialize in working with anxiety, trauma, and OCD. The symptom questionnaires you complete beforehand help guide our discussion and ensure we’re aligned with your needs from the beginning. But first and foremost, you are a person—not a diagnosis."
            imgSrc={CompassionImg}
          />
          <SectionCard
            title="Looking Ahead"
            text="By the end of your session, we’ll begin shaping a path forward together. You’ll have space to ask questions, explore your goals, and decide what next steps feel right for you."
            imgSrc={LookingImg}
          />
        </Container>

        {/* FINAL CTA SECTION: Background image with button */}
        <Box
          aria-label="Final call to action: Schedule an appointment"
          sx={{
            position: "relative",
            backgroundImage: `url('${StoryImg}')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: { xs: 280, md: 340 },
            textAlign: "center",
            mt: 0,
            mb: 0,
            pb: 0,
            overflow: "hidden",
          }}
        >
          {/* Dark overlay */}
          <Box
            sx={{
              position: "absolute",
              inset: 0,
              bgcolor: "rgba(58, 58, 58, 0.25)",
              zIndex: 1,
            }}
          />

          {/* Text and CTA */}
          <Box
            sx={{
              position: "relative",
              zIndex: 2,
              p: { xs: 2, sm: 4 },
              maxWidth: 800,
              color: "#fff",
            }}
          >
            <Typography
              variant="h2"
              fontWeight="bold"
              color="#FAF9F7"
              gutterBottom
              sx={{ fontSize: { xs: "1.6rem", sm: "2rem", md: "2.2rem" } }}
            >
              Your Story Matters.
            </Typography>

            <Typography
              variant="body1"
              sx={{
                fontSize: { xs: "1.45rem", sm: "1.65rem", md: "1.9rem" },
                fontWeight: 400,
                lineHeight: 1.6,
                color: "#FAF9F7",
                mb: 3,
              }}
            >
              We are honored to walk alongside you as you begin your journey.
            </Typography>

            {/* Accessible external link styled as a button */}
            <Button
              variant="contained"
              component="a"
              href="https://hushforms.com/insightschristiancounseling"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Schedule an appointment via Hushmail"
              sx={{
                backgroundColor: "#E89072",
                color: "#fff",
                fontWeight: "bold",
                px: 4,
                py: 1.5,
                fontSize: "1.5rem",
                borderRadius: "999px",
                textTransform: "none",
                "&:hover": {
                  backgroundColor: "#d87b5f",
                },
              }}
            >
              Schedule an Appointment
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default AppointmentInfo;