import React from 'react';
import { Box, Container, Typography, Button, Grid } from '@mui/material';
import AboutHero from '../../assets/images/About/about_hero.jpg';
import CompassionImg from '../../assets/images/About/compassion.jpg';
import ConnectImg from '../../assets/images/About/connect.jpg';
import FaithImg from '../../assets/images/About/faith.jpg';
import FormsImg from '../../assets/images/About/forms.png';
import LookingImg from '../../assets/images/About/looking_ahead.jpg';
import StoryImg from '../../assets/images/About/story.jpg';
import TimeImg from '../../assets/images/About/time.jpg';
import FirstAptImg from '../../assets/images/About/first_appointment.jpg';

const SectionCard = ({ title, text, imgSrc }) => (
  <Box sx={{ backgroundColor: '#FAF9F7', borderRadius: 2, p: 4, mb: 6 }}>
    <Grid container spacing={4} alignItems="center">
      {imgSrc && (
        <Grid item xs={12} sm={4}>
          <Box
            component="img"
            src={imgSrc}
            alt={title}
            sx={{
              width: '100%',
              height: 'auto',
              aspectRatio: '1 / 1',
              borderRadius: 2,
              objectFit: 'cover',
            }}
          />
        </Grid>
      )}
      <Grid item xs={12} sm={imgSrc ? 8 : 12}>
        <Typography variant="h4" gutterBottom color="#D38775">
          {title}
        </Typography>
        <Typography paragraph>{text}</Typography>
      </Grid>
    </Grid>
  </Box>
);

const AppointmentInfo = () => {
  return (
    <Box sx={{ backgroundColor: '#BFDAD5', py: 6, mt: 8 }}>
      <Container maxWidth="md">
        <Typography variant="h5" align="center" gutterBottom color="#3F7C78">
          What to Expect at Your First Appointment
        </Typography>

        <Typography align="center" paragraph sx={{ mb: 6 }}>
          At Insights Christian Counseling, we understand that taking the first step toward therapy can feel both hopeful and uncertain. Whether you're navigating anxiety, trauma, OCD, or a major life change, our goal is to make your first session feel safe, welcoming, and centered on you.
        </Typography>

        <SectionCard
          title="Session Length and Format"
          text="Your first session will be 90 minutes, giving us plenty of time to explore your story without feeling rushed. We offer sessions in-person or virtually, so you can choose what works best for your comfort and schedule."
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
          text=" You’llThis session is all about beginning a relationship of trust. We’ll talk through what brought you to counseling, how you're feeling, and what you’re hoping to gain.
It’s not a checklist or interrogation—it’s a conversation, and you set the pace. We’re here to listen, not rush."
          imgSrc={CompassionImg}
        />

        <SectionCard
          title="Looking Ahead"
          text="By the end of your session, we’ll begin shaping a path forward together. You’ll have space to ask questions, explore your goals, and decide what next steps feel right for you."
          imgSrc={LookingImg}
        />

        <SectionCard
          title="Your Story Matters"
          text="We are honored to walk alingside you as you begin your journey."
          imgSrc={StoryImg}
        />

        <Box textAlign="center" mt={6}>
          <Button
            variant="contained"
            sx={{
              backgroundColor: '#E89072',
              '&:hover': { backgroundColor: '#d0765f' },
            }}
          >
            Schedule an Appointment
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default AppointmentInfo;