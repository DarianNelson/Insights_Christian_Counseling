import React from "react";
import { Box, Typography, Grid, Paper } from "@mui/material";

const AlternatingResourceSection = ({
  title,
  items,
  image,
  bgColor = "#BFDAD5",
  reverse = false,
}) => {
  return (
    <Box sx={{ backgroundColor: bgColor, py: 8, px: { xs: 2, sm: 4 } }}>
      <Grid
        container
        spacing={4}
        direction={reverse ? "row-reverse" : "row"}
        alignItems="stretch" // Makes both columns same height
        justifyContent="center"
      >
        {/* Image */}
        <Grid item xs={12} md={6}>
          <Box
            component="img"
            src={image}
            alt={`${title} visual`}
            sx={{
              width: "100%",
              aspectRatio: "1 / 1",
              objectFit: "cover",
              borderRadius: 4,
              maxHeight: 450,
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)', 
            }}
          />
        </Grid>

        {/* Text Content */}
        <Grid item xs={12} md={6} sx={{ display: "flex" }}>
          <Paper
            elevation={3}
            sx={{
              height: 450,
              p: 4,
              borderRadius: 4,
              backgroundColor: "#ffffff",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              width: "100%",
            }}
          >
            <Typography
              variant="h3"
              align="center"
              component="h2"
              gutterBottom
              color="secondary"
            >
              {title}
            </Typography>
            <Box sx={{ maxHeight: 400, overflowY: "auto" }}>{items}</Box>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AlternatingResourceSection;
