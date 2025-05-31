import React, { useEffect, useRef } from "react";
import { Box, Typography, Card } from "@mui/material";

const HushmailForm = () => {
  const formRef = useRef(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://hushforms.com/f/public/javascript/embed-hush-form.js";
    script.async = true;
    formRef.current.appendChild(script);
  }, []);

  return (
    <Card sx={{ p: 3, borderRadius: 2, boxShadow: 3 }}>
      <Typography variant="h6" gutterBottom>
        Secure Contact Form
      </Typography>
      <Box ref={formRef}>
        <div data-secure-form="lisa.insights-6881"></div>
      </Box>
    </Card>
  );
};

export default HushmailForm;