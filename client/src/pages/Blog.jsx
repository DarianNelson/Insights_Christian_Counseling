import React from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography,
  Box,
  Button,
} from "@mui/material";

const mockPosts = [
  {
    _id: "1",
    title: "Coping with Anxiety in Daily Life",
    excerpt: "Practical ways to manage anxiety and create moments of calm.",
    mainImage: "https://picsum.photos/400/300?random=1",
    publishedAt: "2025-05-15",
  },
  {
    _id: "2",
    title: "The Power of Boundaries",
    excerpt:
      "Why setting boundaries is vital for emotional and relational health.",
    mainImage: "https://picsum.photos/400/300?random=2",
    publishedAt: "2025-05-10",
  },
  {
    _id: "3",
    title: "Self-Compassion is the Key",
    excerpt: "Learn how to speak to yourself with kindness and patience.",
    mainImage: "https://picsum.photos/400/300?random=3",
    publishedAt: "2025-05-08",
  },
  {
    _id: "4",
    title: "Understanding Burnout",
    excerpt: "Recognize the signs of burnout and how to begin recovering.",
    mainImage: "https://picsum.photos/400/300?random=4",
    publishedAt: "2025-05-03",
  },
  {
    _id: "5",
    title: "Grounding Techniques for Stress Relief",
    excerpt:
      "Simple exercises to reconnect with your body and the present moment.",
    mainImage: "https://picsum.photos/400/300?random=5",
    publishedAt: "2025-04-28",
  },
  {
    _id: "6",
    title: "Why Therapy Isn't Just for a Crisis",
    excerpt: "How ongoing support can help you grow, not just survive.",
    mainImage: "https://picsum.photos/400/300?random=6",
    publishedAt: "2025-04-22",
  },
];

const BlogPage = () => {
  return (
    <Box id="blog" sx={{ backgroundColor: "#F5EFE6", py: 8, px: 2 }}>
      <Box sx={{ maxWidth: "1200px", mx: "auto", textAlign: "center", mb: 6 }}>
        <Typography
          variant="h1"
          sx={{ color: "#3F7C78", fontWeight: 600, mb: 2 }}
        >
          Insights Blog
        </Typography>
        <Typography variant="subtitle1" sx={{ color: "#3A3A3A" }}>
          Encouragement, tools, and reflections for your healing journey.
        </Typography>
      </Box>

      <Grid
        container
        sx={{ maxWidth: 1200, mx: "auto", justifyContent: "center" }}
      >
        {mockPosts.map((post, index) => (
          <Grid
            key={post._id}
            item
            sx={{
              flexBasis: "33.33%",
              maxWidth: "33.33%",
              paddingLeft: 2,
              paddingRight: 2,
              boxSizing: "border-box",
              mb: index < 3 ? 3 : 0,
            }}
          >
            <Card
              sx={{
                height: 420,
                width: "100%",
                display: "flex",
                flexDirection: "column",
                backgroundColor: "#FAF9F7",
              }}
              elevation={3}
            >
              <CardActionArea
                component={Link}
                to="/blog/sample-post"
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "stretch",
                }}
              >
                <CardMedia
                  component="img"
                  image={post.mainImage}
                  alt={post.title}
                  sx={{ height: 160, objectFit: "cover" }}
                />

                <CardContent
                  sx={{
                    flexGrow: 1,
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <Typography variant="h6" color="#D38775" gutterBottom>
                    {post.title}
                  </Typography>
                  <Typography
                    variant="body1"
                    color="#3A3A3A"
                    sx={{ flexGrow: 1 }}
                  >
                    {post.excerpt}
                  </Typography>
                  <Typography
                    variant="caption"
                    color="#3A3A3A"
                    sx={{ mt: 2 }}
                  >
                    {new Date(post.publishedAt).toLocaleDateString(undefined, {
                      month: "long",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </Typography>

                  <Box sx={{ mt: 2 }}>
                    <Button
                      variant="outlined"
                      component={Link}
                      to="/blog/sample-post"
                      sx={{
                        borderRadius: "999px",
                        px: 4,
                        py: 1.5,
                        fontSize: "1rem",
                        textTransform: "none",
                        color: "#D38775",
                        border: "1px solid #D38775",
                        "&:hover": {
                          bgcolor: "#D38775",
                          color: "#FAF9F7",
                          borderColor: "#D38775",
                        },
                      }}
                    >
                      Read More
                    </Button>
                  </Box>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default BlogPage;