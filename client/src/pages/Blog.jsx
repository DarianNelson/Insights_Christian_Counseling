import React, { useEffect, useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import {
  Card,
  CardActionArea,
  CardContent,
  Typography,
  Grid,
  Box,
} from "@mui/material";
import { client } from "../sanityClient";
import { Helmet } from "react-helmet";
import { blogPostsQuery } from "../queries";
import Logo from "../assets/images/Logo/Insights_Logo.png";

const BlogPage = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    client.fetch(blogPostsQuery).then(setPosts);
  }, []);

  return (
    <>
      <Helmet>
        <title>Insights Christian Counseling Blog</title>
        <meta
          name="description"
          content="Encouragement, tools, and reflections for your healing journey. Explore articles on mental health, coping, and emotional wellness."
        />
        <meta
          property="og:title"
          content="Insights Christian Counseling Blog"
        />
        <meta
          property="og:description"
          content="Encouragement, tools, and reflections for your healing journey. Explore articles on mental health, coping, and emotional wellness."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://picsum.photos/1200/630?random=8"
        />
        <meta
          property="og:url"
          content="https://insightschristiancounseling.com/blog"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Insights Christian Counseling Blog"
        />
        <meta
          name="twitter:description"
          content="Encouragement, tools, and reflections for your healing journey. Explore articles on mental health, coping, and emotional wellness."
        />
        <meta
          name="twitter:image"
          content="https://picsum.photos/1200/630?random=8"
        />
      </Helmet>

      <Box sx={{ backgroundColor: "#F5EFE6", py: 8, px: 2 }}>
        <Box
          sx={{ maxWidth: "1200px", mx: "auto", textAlign: "center", mb: 6 }}
        >
          <Typography
            variant="h1"
            sx={{ color: "#3F7C78", fontWeight: 500, mb: 2 }}
          >
            Insights Blog
          </Typography>
          <Typography variant="subtitle1" sx={{ color: "#3A3A3A" }}>
            Encouragement, tools, and reflections for your healing journey.
          </Typography>
        </Box>

        <Grid
          container
          spacing={4}
          sx={{ maxWidth: 1200, mx: "auto", justifyContent: "center" }}
        >
          {posts.map((post) => (
            <Grid key={post._id} item xs={12} sm={6} md={4}>
              <Card
                sx={{
                  height: 320,
                  width: 350,
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
      </Box>
    </>
  );
};

export default BlogPage;
