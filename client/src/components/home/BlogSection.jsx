import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Button,
} from '@mui/material';
import BlogPlaceHolder1 from '../../assets/images/Blog/blog1.png';
import BlogPlaceHolder2 from '../../assets/images/Blog/blog2.jpg';

// Sample blog data array
const blogs = [
  {
    title: 'Faith and Mental Health',
    image: BlogPlaceHolder1,
    summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    title: 'Letting Go of What Hurts',
    image: BlogPlaceHolder2,
    summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
];

// Main component for displaying recent blog entries
export default function BlogSection() {
  return (
    <Box
      sx={{ backgroundColor: '#F5EFE6', py: 6 }}
      component="section"
      aria-labelledby="blog-section-heading" 
    >
      <Container>
        {/* Section heading */}
        <Typography
          variant="h3"
          color="#3F7C78"
          fontWeight="bold"
          textAlign="center"
          id="blog-section-heading" 
          sx={{ mb: 4, fontSize: { xs: '2rem', md: '2.25rem' } }}
        >
          Recent Blog Articles
        </Typography>

        {/* Responsive grid for blog cards */}
        <Grid container spacing={4} justifyContent="center">
          {blogs.map((blog, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              {/* Each card represents a blog article */}
              <Card
                sx={{
                  backgroundColor: '#FAF9F7',
                  borderRadius: 3,
                  boxShadow: 2,
                  display: 'flex',
                  flexDirection: 'column',
                  height: '100%',
                  transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: 4,
                  },
                }}
                role="article" 
                aria-label={`Blog article titled ${blog.title}`} 
              >
                {/* Blog image with alt text */}
                <CardMedia
                  component="img"
                  image={blog.image}
                  alt={`Illustration for article: ${blog.title}`} 
                  sx={{
                    height: 200,
                    width: '100%',
                    objectFit: 'cover',
                    borderTopLeftRadius: 12,
                    borderTopRightRadius: 12,
                  }}
                />

                {/* Blog title and summary */}
                <CardContent
                  sx={{
                    flex: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    flexGrow: 1,
                  }}
                >
                  <Box>
                    <Typography variant="h5" fontWeight="bold" gutterBottom>
                      {blog.title}
                    </Typography>
                    <Typography variant="body1" sx={{ mb: 2 }}>
                      {blog.summary}
                    </Typography>
                  </Box>

                  {/* "Read More" button */}
                  <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
                    <Button
                      size="large"
                      aria-label={`Read more about ${blog.title}`} 
                      sx={{
                        color: '#D38775',
                        border: '1px solid #D38775',
                        borderRadius: '50px',
                        px: 3,
                        py: 1.5,
                        '&:hover': {
                          backgroundColor: '#D38775',
                          color: '#FAF9F7',
                        },
                      }}
                    >
                      Read More
                    </Button>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* CTA button to view all blog posts */}
        <Box textAlign="center" mt={6}>
          <Button
            variant="outlined"
            aria-label="View all blog posts" 
            sx={{
              color: '#3F7C78',
              border: '2px solid #3F7C78',
              borderRadius: '50px',
              px: 4,
              py: 1.5,
              fontWeight: 'bold',
              '&:hover': {
                backgroundColor: '#3F7C78',
                color: '#FAF9F7',
              },
            }}
          >
            View All Posts
          </Button>
        </Box>
      </Container>
    </Box>
  );
}