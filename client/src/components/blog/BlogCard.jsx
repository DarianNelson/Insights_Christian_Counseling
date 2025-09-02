import { Card, CardContent, CardMedia, Typography, Button, Box } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

const BlogCard = ({ post }) => {
  return (
    <Card
      component={RouterLink}
      to={`/blog/${post.slug.current}`}
      sx={{
        textDecoration: "none",
        borderRadius: 2,
        overflow: "hidden",
        boxShadow: 3,
        transition: "transform 0.2s ease-in-out",
        "&:hover": { transform: "scale(1.02)" },
      }}
    >
      {post.mainImage && (
        <CardMedia
          component="img"
          height="200"
          image={post.mainImage.asset.url}
          alt={post.title}
        />
      )}
      <CardContent>
        <Typography variant="h6" gutterBottom>
          {post.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {post.excerpt || post.body?.[0]?.children?.[0]?.text?.slice(0, 120) + "..."}
        </Typography>
        <Box mt={2}>
          <Button size="small" variant="outlined">
            Read More
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default BlogCard;