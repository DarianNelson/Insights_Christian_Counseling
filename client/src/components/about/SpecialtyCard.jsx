import React from "react";
import { Box, Typography } from "@mui/material";

const SpecialtyCard = ({ specialties }) => {
  return (
    <Box
      sx={{
        backgroundColor: "#BFDAD5",
        mt: 2,
        p: 2,
        borderRadius: 2,
        boxShadow: 1,
        width: { xs: "100%", sm: '100%', md: 240 }, // match headshot width
        textAlign: "center",
      }}
    >
      <Typography
        variant="h4"
        sx={{
          fontWeight: 600,
          color: "#3F7C78",
          mb: 1,
        }}
      >
        Areas of Specialty
      </Typography>

      {specialties.map((item, idx) => (
        <Typography
          key={idx}
          variant="body1"
          sx={{
            color: "#3A3A3A",
            lineHeight: 1.6,
          }}
        >
          {item}
        </Typography>
      ))}
    </Box>
  );
};

export default SpecialtyCard;