import React from 'react';
import { Box, Typography, Card, CardContent, CardMedia, Button, Stack, Divider } from '@mui/material';
import SpecialtyCard from './SpecialtyCard';
import ServicesCard from './ServicesCard';
import FeesInsuranceCard from './FeesInsuranceCard';

const TherapistCard = ({ therapist }) => {
  console.log('Therapist bio type:', typeof therapist.bio);
  console.log('Therapist bio:', therapist.bio);
  return (
    <Card sx={{ backgroundColor: '#FAF9F7', p: 2, borderRadius: 4 }}>
      <Stack direction={{ xs: 'column', md: 'row' }} spacing={3}>
        {/* Headshot */}
        <CardMedia
          component="img"
          image={therapist.photo}
          alt={therapist.name}
          sx={{ width: 150, height: 150, borderRadius: '50%', objectFit: 'cover' }}
        />

        <CardContent sx={{ flex: 1 }}>
          <Box display="flex" justifyContent="space-between" alignItems="center">
            <Typography variant="h6" color="#3F7C78">
              {therapist.name}
            </Typography>
            <Button variant="outlined" sx={{ color: '#E89072', borderColor: '#E89072' }}>
              Schedule an Appointment
            </Button>
          </Box>
          <Typography variant="subtitle2" color="textSecondary" gutterBottom>
            {therapist.credentials} · {therapist.license}
          </Typography>
          {therapist.bio.map((paragraph, idx) => (
          <Typography key={idx} variant="body2" paragraph>
            {paragraph}
          </Typography>
        ))}

          <Divider sx={{ my: 2 }} />

          <SpecialtyCard specialties={therapist.specialties} />
          <ServicesCard services={therapist.services} />
          <FeesInsuranceCard fees={therapist.fees} insurance={therapist.insurance} />
        </CardContent>
      </Stack>
    </Card>
  );
};

export default TherapistCard;