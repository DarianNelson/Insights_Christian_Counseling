import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  Box,
  Typography,
  Card,
  CardContent,
  Button,
  CircularProgress,
} from "@mui/material";
import { client } from "../sanityClient";
import { PortableText } from "@portabletext/react";
import { Helmet } from "react-helmet";
import { postQuery } from "../queries";

const BlogDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    client.fetch(postQuery, { slug }).then((data) => {
      if (!data) {
        navigate("/blog");
      } else {
        setPost(data);
        setLoading(false);
      }
    });
  }, [slug, navigate]);

  if (loading) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "60vh",
        }}
      >
        <CircularProgress color="primary" size={60} />
      </Box>
    );
  }

  return (
    <>
      <Helmet>
        <title>{post.title} | Insights Christian Counseling Blog</title>
        <meta
          name="description"
          content={
            post.excerpt ||
            `Read: ${post.title} by ${post.authorName}. Explore more insights and reflections on healing and emotional health.`
          }
        />
        <meta property="og:title" content={post.title} />
        <meta
          property="og:description"
          content={
            post.excerpt ||
            `Read: ${post.title} by ${post.authorName}. Explore more insights and reflections on healing and emotional health.`
          }
        />
        <meta property="og:type" content="article" />
        <meta
          property="og:image"
          content={post.mainImage?.asset?.url || "https://picsum.photos/1200/630?random=7"}
        />
        <meta
          property="og:url"
          content={`https://insightschristiancounseling.com/blog/${slug}`}
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={post.title} />
        <meta
          name="twitter:description"
          content={`Read: ${post.title} by ${post.authorName}.`}
        />
        <meta
          name="twitter:image"
          content={post.mainImage?.asset?.url || "https://picsum.photos/1200/630?random=7"}
        />
      </Helmet>

      <Box sx={{ bgcolor: "#F5EFE6", minHeight: "100vh", py: 6, px: 2 }}>
        <Box maxWidth="800px" mx="auto">
          <Card sx={{ bgcolor: "#FAF9F7", p: { xs: 2, sm: 4 }, borderRadius: 3 }} elevation={3}>
            {post.mainImage?.asset?.url && (
              <Box
                component="img"
                src={post.mainImage.asset.url}
                alt={`Cover image for ${post.title}`}
                sx={{
                  width: "100%",
                  maxHeight: 400,
                  borderRadius: 2,
                  mb: 4,
                  objectFit: "cover",
                }}
              />
            )}

            <Typography
              variant="h3"
              sx={{ color: "#D38775", mb: 2 }}
              aria-label="Blog post title"
            >
              {post.title}
            </Typography>

            <Typography variant="subtitle2" sx={{ color: "#3F7C78", mb: 1 }}>
              {post.authorName}
            </Typography>

            <Typography variant="subtitle2" sx={{ color: "#3F7C78", mb: 3 }}>
              Published on{" "}
              {new Date(post.publishedAt).toLocaleDateString(undefined, {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </Typography>

            <CardContent sx={{ px: 0 }}>
              <PortableText value={post.body} />
            </CardContent>

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
              onClick={() => navigate("/blog")}
              aria-label="Go back to blog overview"
            >
              ← Back to Blog
            </Button>
          </Card>
        </Box>
      </Box>
    </>
  );
};

export default BlogDetail;