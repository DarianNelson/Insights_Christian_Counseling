import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardActionArea,
  CardContent,
} from "@mui/material";
import { useEffect, useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import { client } from "../../sanityClient";
import { blogPostsQuery } from "../../queries";
import Logo from "../../assets/images/Logo/Insights_Logo.png";

export default function BlogSection() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    client.fetch(blogPostsQuery).then((data) => {
      // Just grab the first 2–3 posts for preview
      setBlogs(data.slice(0, 3));
    });
  }, []);

  return (
    <Box
      sx={{ backgroundColor: "#F5EFE6", py: 6 }}
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
          sx={{ mb: 4, fontSize: { xs: "2rem", md: "2.25rem" } }}
        >
          Recent Blog Articles
        </Typography>

        {/* Blog previews */}
        <Grid container spacing={{ xs: 2, sm: 4 }} justifyContent="center">
          {blogs.map((post) => (
            <Grid
              key={post._id}
              item
              xs={12}
              sm={6}
              md={4}
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <Card
                sx={{
                  height: 320,
                  width: "100%",
                  maxWidth: 350,
                  display: "flex",
                  flexDirection: "column",
                  backgroundColor: "#FAF9F7",
                }}
                elevation={3}
              >
                <CardActionArea
                  component={RouterLink}
                  to={`/blog/${post.slug.current}`}
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                  }}
                  aria-label={`Read more about ${post.title}`}
                >
                  {/* Image fallback just like BlogPage */}
                  <Box
                    sx={{
                      width: "100%",
                      height: 160,
                      backgroundColor: post.mainImage?.asset?.url
                        ? "transparent"
                        : "#D3E3DC",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      overflow: "hidden",
                    }}
                  >
                    {post.mainImage?.asset?.url ? (
                      <Box
                        component="img"
                        src={post.mainImage.asset.url}
                        alt={`Cover image for ${post.title}`}
                        sx={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                          display: "block",
                        }}
                      />
                    ) : (
                      <Box
                        component="img"
                        src={Logo}
                        alt="Insights Christian Counseling logo"
                        sx={{
                          maxWidth: "60%",
                          height: "auto",
                          opacity: 0.5,
                        }}
                      />
                    )}
                  </Box>

                  <CardContent
                    sx={{
                      flexGrow: 1,
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                      alignItems: "flex-start",
                      width: "100%",
                      px: 2,
                    }}
                  >
                    <Typography
                      variant="h6"
                      color="#D38775"
                      gutterBottom
                      sx={{ textAlign: "left", wordBreak: "break-word" }}
                    >
                      {post.title}
                    </Typography>

                    <Typography
                      variant="caption"
                      color="#3A3A3A"
                      sx={{ mt: 2, textAlign: "left" }}
                    >
                      {new Date(post.publishedAt).toLocaleDateString(
                        undefined,
                        {
                          month: "long",
                          day: "numeric",
                          year: "numeric",
                        }
                      )}
                    </Typography>

                    <Typography
                      component={RouterLink}
                      to={`/blog/${post.slug.current}`}
                      sx={{
                        mt: 1,
                        color: "#3F7C78",
                        fontWeight: 500,
                        fontSize: "0.9rem",
                        textDecoration: "none",
                        display: "inline-flex",
                        alignItems: "center",
                        textAlign: "left",
                        "&:hover": {
                          color: "#2E5958",
                          textDecoration: "underline",
                        },
                      }}
                    >
                      Read More{" "}
                      <Box component="span" sx={{ ml: 0.5 }}>
                        &gt;
                      </Box>
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Subtle "View All" link */}
        {blogs.length > 0 && (
          <Box textAlign="center" mt={{ xs: 3, md: 4}}>
            <RouterLink
              to="/blog"
              style={{
                color: "#3F7C78",
                fontWeight: 500,
                textDecoration: "underline",
                fontSize: "1rem",
              }}
            >
              View All Blog Posts &rarr;
            </RouterLink>
          </Box>
        )}
      </Container>
    </Box>
  );
}
