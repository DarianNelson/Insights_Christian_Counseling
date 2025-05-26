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
    <Box sx={{ backgroundColor: '#F5EFE6', pt: 2, pb: 6 }}>
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
              <Card sx={{ 
                p: 2, 
                display: 'flex', 
                flexDirection: { xs: 'column', md: 'row' },
                alignItems: { xs: 'center', md: 'stretch' },
                backgroundColor: '#FAF9F7', 
                borderRadius: 3, 
                boxShadow: 2,
                minHeight: { md: 160 }, 
                }}
                >
                {/* Headshot image with alt text */}
                <CardMedia
                    component="img"
                    image={t.image || '/images/Headshots/placeholder.jpg'}
                    alt={`Photo of ${t.name}`}
                    sx={{ 
                      width: { xs: 200, md: 150 },
                      height: { xs: 200, md: 150 },
                      objectFit: 'cover', 
                      borderRadius: 2, 
                      boxShadow: 2,
                      mb: { xs: 2, md: 0 },
                      mr: { xs: 0, md: 2 },
                    }}
                />

                {/* Card content holds the name, description, and CTA button */}
                <CardContent
                  sx={{
                    flex: 1,
                    display: 'flex',
                    flexDirection: { xs: 'column', md: 'row' },
                    alignItems: { xs: 'center', md: 'center' },
                    justifyContent: 'space-between',
                    gap: 3, // spacing between text and button
                    p: 0, '&:last-child': { pb: 0 },
                    textAlign: { xs: 'center', md: 'left' },
                  }}
                >
                  {/* Text Section: Name and description */}
                  <Box sx={{ flex: 1, pr: { md: 2 } }}>
                    <Typography variant="h4" fontWeight="bold">
                      {t.name}
                   </Typography>
                   <Typography variant="body1" sx={{ my: 1 }}>
                      {t.description}
                   </Typography>
                  </Box>

                  {/* Learn More button */}
                  <Button 
                    size="large" 
                    sx={{ 
                      mt: { xs: 2, md: 0 },
                      color: '#D38775',
                      border: '1px solid #D38775',
                      borderRadius: '50px', 
                      px: 3, 
                      py: 1.5,
                      whiteSpace: 'nowrap',
                      '&:hover': {
                        backgroundColor: '#D38775',
                        color: '#FAF9F7',
                      }

                    }}
                  >
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