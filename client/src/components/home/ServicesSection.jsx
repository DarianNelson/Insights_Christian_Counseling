import { Box, Typography } from '@mui/material';

const services = [
  'Anxiety',
  'Trauma',
  'Depression',
  'Grief',
  'Relationship Issues',
  'Boundaries',
  'Adjustment Disorder',
];

export default function ServicesSection() {
  return (
    <Box sx={{ 
      backgroundColor: '#F5EFE6', 
      py: { xs: 4, md: 5 },
      mt: 0, 
    }}>

      {/* Title above the card */}
      <Typography
        id="services"
        variant="h2"
        fontWeight="bold"
        color="#3F7C78"
        sx={{ mt: 0,mb: 2, textAlign:'center', fontSize: { xs: '2rem', md: '2.25rem' } //trying manual font sizing
      }}>
        Services We Offer
      </Typography>

      {/* Content container */}
      <Box
        sx={{
          backgroundColor: '#FFF',
          borderRadius: 3,
          boxShadow: 2,
          maxWidth: '95%',
          mx: 'auto',
          py: 2,
          px: { xs: 2, sm: 4 },
          textAlign: 'center',
        }}
      >
        <Typography
          variant="h6"
          color="#3A3A3A"
          sx={{
            fontWeight: 500,
            fontSize: { xs: '1.1rem', sm: '1.4rem', md: '1.6rem' },
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap',
            gap: 1,
          }}
        >
          {services.map((service, index) => (
            <span
              key={index}
              style={{
                transition: 'transform 0.2s ease, color 0.2s ease',
                cursor: 'default',
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = 'scale(1.05)';
                e.target.style.color = '#D38775'; // Accent color on hover
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'scale(1)';
                e.target.style.color = '#3A3A3A'; // Base color
              }}
            >
              {service}
              {index < services.length - 1 && <>&nbsp;&middot;&nbsp;</>}
            </span>
          ))}
        </Typography>
      </Box>
    </Box>
  );
}