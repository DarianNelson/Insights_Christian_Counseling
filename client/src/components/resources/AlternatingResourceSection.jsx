import React from "react";
import { Box, Typography, Grid, Paper } from "@mui/material";

// AlternatingResourceSection component
// Alternates layout based on the `reverse` prop (image left/right)
const AlternatingResourceSection = ({
  title,
  items,
  image,
  bgColor = "#BFDAD5",
  reverse = false,
}) => {
  return (
    <Box
      component="section"
      aria-label={`${title} resource section`} 
      sx={{ backgroundColor: bgColor, py: 8, px: { xs: 2, sm: 4 } }}
    >
      {/* Grid with alternating direction based on the 'reverse' prop */}
      <Grid
        container
        spacing={4}
        direction={reverse ? "row-reverse" : "row"} // Determines if image is on left or right
        alignItems="stretch" // Makes image and content the same height
        justifyContent="center"
      >
        {/* Image Grid Item */}
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
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
            }}
          />
        </Grid>

        {/* Text Content Grid Item */}
        <Grid item xs={12} md={6} sx={{ display: "flex" }}>
          <Paper
            elevation={3}
            role="region" 
            aria-labelledby={`${title.replace(/\s/g, "-").toLowerCase()}-heading`} 
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
            {/* Section Title */}
            <Typography
              id={`${title.replace(/\s/g, "-").toLowerCase()}-heading`} 
              variant="h3"
              align="center"
              component="h2"
              gutterBottom
              color="secondary"
            >
              {title}
            </Typography>

            {/* Scrollable items container (e.g., list of links or resources) */}
            <Box
              sx={{ maxHeight: 400, overflowY: "auto" }}
              tabIndex={0} 
              aria-label={`Scrollable list of ${title.toLowerCase()}`} 
            >
              {items}
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AlternatingResourceSection;