import React from 'react';
import { Grid, Typography, Box } from '@mui/material';
import ResourceCard from '../components/resources/ResourceCard';
import BookList from '../components/resources/BookList';
import recommendedBooks from '../data/recommendedBooks';
import { localResources, hotlines, otherResources } from '../data/resourceData';

const Resources = () => {
  return (
    <Box sx={{ px: { xs: 2, md: 4 }, py: 4 }}>
      <Typography variant="h4" gutterBottom color="primary" align="center">
        Resources
      </Typography>

      <Grid container spacing={3} justifyContent="center" alignItems="flex-start">
        <Grid item xs={12} md={4}>
          <BookList books={recommendedBooks} />
        </Grid>
        <Grid item xs={12} md={4}>
          <ResourceCard title="Local Resources" items={localResources} color="#3F7C78" />
        </Grid>
         <Grid item xs={12} md={4}>
          <ResourceCard title="Hotlines" items={hotlines} color="#E89072" />
        </Grid>
        <Grid item xs={12} md={4}>
          <ResourceCard title="Other Resources" items={otherResources} color="#D38775" />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Resources;