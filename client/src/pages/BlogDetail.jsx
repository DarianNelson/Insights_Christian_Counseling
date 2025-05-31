import React from "react";
import { Box, Typography, Card, CardContent, Button } from "@mui/material";

// BlogDetail component displays a single blog post in detail view
const BlogDetail = () => {
  return (
    <Box
      sx={{
        bgcolor: "#F5EFE6",
        minHeight: "100vh", // Ensures full height on short posts
        py: 6,
        px: 2,
      }}
    >
      <Box maxWidth="800px" mx="auto"> {/* Centers the blog card and restricts width for readability */}
        <Card sx={{ bgcolor: "#FAF9F7", p: 4 }} elevation={3}>
          
          {/* Cover Image for blog post */}
          <Box
            component="img"
            src="https://picsum.photos/400/300?random=6"
            alt="Blog cover" 
            sx={{ width: "100%", height: "auto", borderRadius: 2, mb: 4 }}
          />

          {/* Blog Title */}
          <Typography
            variant="h3"
            sx={{ color: "#D38775", mb: 2 }}
            aria-label="Blog post title" 
          >
            Sample Blog Post Title
          </Typography>

          {/* Author and publish date */}
          <Typography variant="subtitle2" sx={{ color: "#3F7C78" }}>
            Author Name
          </Typography>
          <Typography variant="subtitle2" sx={{ color: "#3F7C78", mb: 3 }}>
            Published on May 29, 2025
          </Typography>

          {/* Post content */}
          <CardContent sx={{ px: 0 }}>
            {/* Intro paragraph */}
            <Typography variant="body1" sx={{ color: "#3A3A3A", mb: 3 }}>
              This is the introductory paragraph of the blog post. It gives the
              reader a quick summary or engaging opener before they dive into
              the full content.
            </Typography>

            {/* Full content */}
            <Typography
              variant="body1"
              sx={{ color: "#3A3A3A", lineHeight: 1.8 }}
            >
              Here is the full content of the blog post. It might contain
              paragraphs, quotes, or insights that the therapist wants to share.
              This layout ensures that the content is easy to read and visually
              consistent with the rest of the site.
              <br />
              <br />
              You can also add styling later to handle headers, bullet points,
              or embedded media depending on how posts are written in the CMS.
            </Typography>
          </CardContent>

          {/* Navigation button to go back to blog list */}
          <Button
            variant="outlined"
            sx={{
              mt: 4,
              borderRadius: "999px", 
              color: "#3A3A3A",
              borderColor: "#D38775",
              textTransform: "none",
              "&:hover": {
                bgcolor: "#D38775",
                color: "#FAF9F7",
              },
            }}
            href="/blog"
            aria-label="Go back to blog overview" 
          >
            ← Back to Blog
          </Button>
        </Card>
      </Box>
    </Box>
  );
};

export default BlogDetail;