import { Box, Container, Typography, Stack, Chip } from '@mui/material';

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
    <Box sx={{ py: 6 }}>
      <Container>
        <Typography variant="h6" color="#3F7C78" fontWeight="bold" gutterBottom>
          Featured Services
        </Typography>
        <Stack direction="row" flexWrap="wrap" spacing={2}>
          {services.map((service, index) => (
            <Chip
              key={index}
              label={service}
              sx={{ bgcolor: '#D3E3DC', color: '#3A3A3A' }}
            />
          ))}
        </Stack>
      </Container>
    </Box>
  );
}