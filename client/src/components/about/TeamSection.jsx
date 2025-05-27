import React from 'react';
import { Grid } from '@mui/material';
import TherapistCard from './TherapistCard';
import { therapistsData } from '../../data/therapists';

const TeamSection = () => {
  return (
    <Grid container spacing={4}>
      {therapistsData.map((therapist, index) => (
        <Grid item xs={12} md={6} key={index}>
          <TherapistCard therapist={therapist} />
        </Grid>
      ))}
    </Grid>
  );
};

export default TeamSection;