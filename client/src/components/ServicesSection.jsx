import { Box, Container, Typography, Stack} from '@mui/material';

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
    <Box sx={{ py: 4 , backgroundColor: '#FAF9F7'}}>
      <Container>
        <Typography 
          variant="h3" 
          textAlign="center"
          color="#3F7C78" 
          fontWeight="bold" 
          gutterBottom>
          Featured Services
        </Typography>
        <Stack 
          direction="row" 
          flexWrap="wrap" 
          spacing={{ xs: 1.5, md: 3 }} 
          justifyContent='center'
          sx={{ maxWidth: '900px', mx: 'auto' }}
        >

           {/* Trying to fix this */}
<Box sx={{ textAlign: 'center', mt: 4 }}>
  <ul style={{ listStyleType: 'disc', paddingLeft: 0, textAlign: 'left', display: 'inline-block' }}>
    {services.map((service, index) => (
      <li key={index}>
        <Typography variant="h6" sx={{ mb: 1 }}>
          {service}
        </Typography>
      </li>
    ))}
  </ul>
</Box>
  
        </Stack>
      </Container>
    </Box>
  );
}