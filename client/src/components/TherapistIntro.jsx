// Import necessary components from React and Material UI
import { Box, Container, Typography, Grid, Card, CardContent, CardMedia, Button } from '@mui/material';

// Therapist data (could eventually be dynamic or pulled from an API)
const therapists = [
  {
    name: 'Lisa Parsons, LCSW',
    image: '/images/Headshots/Lisa.png',
    description:
      'Lisa is a faith-based therapist specializing in trauma and anxiety, Lisa combines clinical expertise with compassionate, values-driven care. She is passionate about walking alongside clients as they seek healing, peace, and renewed purpose through evidence-based care and spiritual support.'},
  {
    name: 'Amanda Whichard, LPC–MHSP TN',
    //image: '/images/Headshots/Amanda.png', // Need approval from Amanda to use image
    description:
      'Amanda is a faith-sensitive therapist specializing in anxiety, OCD, and trauma. Amanda strives to create a warm, supportive space where clients feel heard, understood, and empowered to pursue lasting peace and personal growth using evidenced-based treatments.'
  },
];

// Define the component that renders the therapist section
export default function TherapistsSection() {
  return (
    // Outer Box for background styling and padding
    <Box sx={{ backgroundColor: '#F5EFE6', py: 6 }}>
      <Container>
        {/* Section heading */}
        <Typography variant="h2" textAlign="center" fontWeight="bold" color="#3F7C78" gutterBottom>
          Meet Our Therapists
        </Typography>

        {/* Grid layout for therapist cards */}
        <Grid container spacing={4} justifyContent="center">
          {therapists.map((t, index) => (
            <Grid item xs={12} md={6} key={index}>
              {/* Each therapist gets a Card */}
              <Card sx={{ p: 2, display: 'flex', alignItems: 'flex-start', backgroundColor: '#FAF9F7', borderRadius: 3, boxShadow: 2 }}>
                {/* Headshot image with alt text */}
                <CardMedia
                    component="img"
                    image={t.image}
                    alt={`Photo of ${t.name}`}
                    sx={{ width: 80, height: 80, borderRadius: 2, mr: 2 }}
                />

                {/* Card content holds the name, description, and CTA button */}
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography variant="h4" fontWeight="bold">
                    {t.name}
                  </Typography>
                  <Typography variant="body1" sx={{ my: 1 }}>
                    {t.description}
                  </Typography>
                  {/* Learn More button */}
                  <Button size="large" sx={{ color: '#D38775' }}>
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}