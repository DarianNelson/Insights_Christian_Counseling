import { Box, Container, Typography, Grid, Card, CardContent, CardMedia, Button } from '@mui/material';
import { therapistsData } from '../../data/therapists';

// TherapistsSection component: renders a list of therapist cards with photos, bios, and a "Learn More" button
export default function TherapistsSection() {
  return (
    <Box
      component="section"
      aria-labelledby="therapists" 
      sx={{
        backgroundColor: '#F5EFE6',
        pt: { xs: 6, md: 8 },
        pb: { xs: 2, md: 2 }, // Tightened bottom padding
      }}
    >
      <Container>
        {/* SECTION TITLE */}
        <Typography
          id="therapists" 
          variant="h2"
          textAlign="center"
          fontWeight="bold"
          color="#3F7C78"
          sx={{ mb: 4, fontSize: { xs: '2rem', md: '2.25rem' } }} // Responsive font sizing
        >
          Meet Our Therapists
        </Typography>

        {/* RESPONSIVE GRID: maps through therapistsData and displays each in its own card */}
        <Grid container spacing={3} justifyContent="center">
          {therapistsData.map((t) => (
            <Grid item xs={12} md={6} key={t.slug}>
              <Card
                role="article" 
                aria-label={`Therapist profile for ${t.name}`}
                sx={{
                  p: 2,
                  display: 'flex',
                  flexDirection: { xs: 'column', md: 'row' }, // Responsive: stack on mobile, side-by-side on desktop
                  alignItems: { xs: 'center', md: 'stretch' },
                  backgroundColor: '#FAF9F7',
                  borderRadius: 3,
                  boxShadow: 2,
                  minHeight: { md: 160 },
                }}
              >
                {/* THERAPIST PHOTO */}
                <CardMedia
                  component="img"
                  image={t.photo}
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

                {/* CONTENT: Name, intro, and Learn More button */}
                <CardContent
                  sx={{
                    flex: 1,
                    display: 'flex',
                    flexDirection: { xs: 'column', md: 'row' },
                    alignItems: { xs: 'center', md: 'center' },
                    justifyContent: 'space-between',
                    gap: 3,
                    p: 0,
                    '&:last-child': { pb: 0 },
                    textAlign: { xs: 'center', md: 'left' },
                  }}
                >
                  <Box sx={{ flex: 1, pr: { md: 2 } }}>
                    <Typography variant="h4" fontWeight="bold">
                      {t.name}
                    </Typography>
                    <Typography variant="body1" sx={{ my: 1 }}>
                      {t.intro}
                    </Typography>
                  </Box>

                  {/* LEARN MORE BUTTON: links to corresponding therapist section on About page */}
                  <Button
                    size="large"
                    href={`/about#${t.slug}`} // Uses slug to deep link into the About page
                    aria-label={`Learn more about therapist ${t.name}`} 
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
                      },
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