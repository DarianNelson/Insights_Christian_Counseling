import { Box, Container, Typography, Grid, Card, CardContent, CardMedia, Button } from '@mui/material';

const blogs = [
  {
    title: 'Faith and Mental Health',
    image: '/images/blog1.jpg',
    summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    title: 'Letting Go of What Hurts',
    image: '/images/blog2.jpg',
    summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
];

export default function BlogSection() {
  return (
    <Box sx={{ backgroundColor: '#F5EFE6', py: 6 }}>
      <Container>
        <Typography variant="h6" color="#3F7C78" fontWeight="bold" gutterBottom>
          Recent Blog Articles
        </Typography>
        <Grid container spacing={4}>
          {blogs.map((blog, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card>
                <CardMedia
                  component="img"
                  height="160"
                  image={blog.image}
                  alt={blog.title}
                />
                <CardContent>
                  <Typography variant="subtitle1" fontWeight="bold">
                    {blog.title}
                  </Typography>
                  <Typography variant="body2" sx={{ mb: 1 }}>
                    {blog.summary}
                  </Typography>
                  <Button size="small" sx={{ color: '#D38775' }}>
                    Read More
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
