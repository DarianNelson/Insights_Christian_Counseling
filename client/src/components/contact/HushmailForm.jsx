import React from "react";
import { Box, Typography, Card } from "@mui/material";

const HushmailForm = () => {
  return (
    <Card
      sx={{ p: 3, borderRadius: 2, boxShadow: 3 }}
      aria-labelledby="hushmail-form-title"
    >
      <Typography variant="h6" gutterBottom id="hushmail-form-title">
        Secure Contact Form
      </Typography>

      <Box aria-live="polite" tabIndex={-1}>
        <div
          data-secure-form="insightschristiancounseling"
          aria-label="Hushmail secure contact form"
        ></div>
      </Box>
    </Card>
  );
};

export default HushmailForm;