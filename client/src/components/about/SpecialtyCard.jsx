import React from 'react';
import { Box, Typography, Chip, Stack } from '@mui/material';

const SpecialtyCard = ({ specialties }) => {
  return (
    <Box mb={2}>
      <Typography variant="subtitle1" gutterBottom color="#3F7C78">
        Areas of Specialty
      </Typography>
      <Stack direction="row" flexWrap="wrap" gap={1}>
        {specialties.map((item, idx) => (
          <Chip key={idx} label={item} variant="outlined" sx={{ bgcolor: '#BFDAD5' }} />
        ))}
      </Stack>
    </Box>
  );
};

export default SpecialtyCard;