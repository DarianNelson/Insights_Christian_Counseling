import React from "react";
import { Box, Typography } from "@mui/material";

const ServicesCard = ({ services }) => {
  return (
    <Box
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
        sx={{
          fontWeight: 600,
          color: "#D38775",
          //fontSize: { xs: "0.8rem", sm: "0.9rem", md: "1rem" },
        }}
      >
        Services Offered
      </Typography>
      <Box sx={{ mt: 0.5, textAlign: "center"}}>
        {services.map((item, idx) => (
          <Typography
            key={idx}
            variant="body1"
            sx={{ 
              color: "#3A3A3A", 
              lineHeight: 1.6 
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