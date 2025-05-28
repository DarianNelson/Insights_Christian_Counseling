import React from 'react';
import { Grid, Typography, Box } from '@mui/material';
import ResourceCard from '../../components/resources/ResourceCard';
import BookList from '../../components/resources/BookList';
import recommendedBooks from '../../data/recommendedBooks';
import { localResources, hotlines, otherResources } from '../../data/resourceData';

const ResourcesSection = () => {
  return (
    <Box sx={{ py: 6, px: { xs: 2, sm: 4, md: 6 } }}>
      <Typography variant="h2" gutterBottom color="primary" align="center" sx={{ mb: 4 }}>
        Resources
      </Typography>
      <Grid container spacing={3} justifyContent="center" alignItems="flex-start">
        <Grid item xs={12} sm={12} md={4}>
          <BookList books={recommendedBooks} />
        </Grid>

        <Grid item xs={12} sm={12} md={4}>
          <ResourceCard
            title="Local Resources"
            items={localResources}
            color="#3F7C78"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
            <Box display="flex" flexDirection="column" gap={2}>
                <ResourceCard title="Hotlines" items={hotlines} color="#E89072" />
                <ResourceCard title="Other Resources" items={otherResources} color="#D38775" />
            </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ResourcesSection;