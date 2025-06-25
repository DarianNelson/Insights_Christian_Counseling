import { Box, Typography } from '@mui/material';

// List of services offered (can be updated in one place)
const services = [
  'Anxiety',
  'Trauma',
  'Depression',
  'Grief',
  'Relationship Issues',
  'EMDR',
  'OCD',
  'Establishing Boundaries',
  'Adjustment Disorder',
];

// ServicesSection component: displays a stylized list of services with hover effects
export default function ServicesSection() {
  return (
    <Box
      component="section"
      aria-labelledby="services" 
      sx={{
        backgroundColor: '#F5EFE6',
        py: { xs: 4, md: 5 }, // Responsive vertical padding
        mt: 0,
      }}
    >
      {/* Section heading */}
      <Typography
        id="services" 
        variant="h2"
        fontWeight="bold"
        color="#3F7C78"
        sx={{
          mt: 0,
          mb: 2,
          textAlign: 'center',
          fontSize: { xs: '2rem', md: '2.25rem' }, // Responsive font sizing
        }}
      >
        Services We Offer
      </Typography>

      {/* Card-style container for the services list */}
      <Box
        sx={{
          backgroundColor: '#FFF',
          borderRadius: 3,
          boxShadow: 2,
          maxWidth: '95%',
          mx: 'auto',
          py: 2,
          px: { xs: 2, sm: 4 }, // Responsive horizontal padding
          textAlign: 'center',
        }}
      >
        {/* Service items displayed in a horizontal wrap layout */}
        <Typography
          variant="h6"
          color="#3A3A3A"
          role="list" 
          sx={{
            fontWeight: 500,
            fontSize: { xs: '1.1rem', sm: '1.4rem', md: '1.6rem' }, // Responsive font sizing
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap',
            gap: 1,
          }}
        >
          {/* Render each service as a visually styled span with hover effects */}
          {services.map((service, index) => (
            <span
              key={index}
              role="listitem"
              tabIndex={0} 
              style={{
                transition: 'transform 0.2s ease, color 0.2s ease',
                cursor: 'default',
                outline: 'none',
              }}
              onFocus={(e) => {
                e.target.style.outline = '2px solid #3F7C78'; 
              }}
              onBlur={(e) => {
                e.target.style.outline = 'none';
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
              {/* Add a bullet between services except after the last one */}
              {index < services.length - 1 && <>&nbsp;&middot;&nbsp;</>}
            </span>
          ))}
        </Typography>
      </Box>
    </Box>
  );
}