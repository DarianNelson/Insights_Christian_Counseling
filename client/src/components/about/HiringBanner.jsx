import React from "react";
import { Box, Typography } from "@mui/material";

export default function HiringBanner() {
  return (
    <Box
      sx={{
        width: "100%",
        bgcolor: "#BFDAD5",
        color: "text.primary",
        py: 4,
        px: 3,
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 3,
        borderBottom: "1px solid",
        borderColor: "grey.300",
      }}
    >
      <Typography
              variant="h3"
              sx={{
                fontWeight: 600,
                color: "#3F7C78",
                mb: 1,
              }}
              id="specialty-heading" 
            >
        Insights Christian Counseling is Growing!
      </Typography>

      <Typography sx={{ maxWidth: 800, color: "primary"}}>
        We are currently seeking a compassionate, faith-based counselor to join our
        team. If you feel called to serve individuals and families on the
        Mississippi Gulf Coast and want to be part of a supportive,
        purpose-driven practice, we’d love to connect with you.
      </Typography>

      <Typography sx={{ maxWidth: 800 }}>
        For more information or to apply, please contact Lisa at{" "}
        <a
          href="mailto:lisa.parsons@insightschristiancounseling.com"
          style={{ color: "#D38775", fontWeight: 600, textDecoration: "underline" }}
        >
          lisa.parsons@insightschristiancounseling.com
        </a>
        .
      </Typography>
    </Box>
  );
}