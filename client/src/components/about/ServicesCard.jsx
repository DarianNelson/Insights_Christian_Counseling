import React from "react";
import { Box, Typography } from "@mui/material";

const ServicesCard = ({ services }) => {
  return (
    <Box
      aria-label="Card listing therapy services offered" 
      sx={{
        backgroundColor: "#FAF9F7",
        px: 2,
        py: 1.5,
        borderRadius: 2,
        boxShadow: 1,
        mt: 2,
        textAlign: "center",
      }}
    >
      <Typography
        variant="h3"
        id="services-section-title"
        sx={{
          fontWeight: 600,
          color: "#D38775",
        }}
      >
        Services Offered
      </Typography>

      <Box
        sx={{ mt: 0.5, textAlign: "center" }}
        role="region" 
        aria-labelledby="services-section-title"
      >
        {services.map((item, idx) => (
          <Typography
            key={idx}
            variant="body1"
            role="text" 
            tabIndex={0} 
            sx={{ 
              color: "#3A3A3A", 
              lineHeight: 1.6,
              outline: "none", 
              "&:focus": {
                outline: "2px solid #3F7C78",
                outlineOffset: "2px",
              },
            }}
          >
            {item}
          </Typography>
        ))}
      </Box>
    </Box>
  );
};

export default ServicesCard;