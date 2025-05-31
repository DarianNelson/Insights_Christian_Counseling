import React, { useEffect, useRef } from "react";
import { Box, Typography, Card } from "@mui/material";

// HushmailForm component embeds a secure third-party contact form using Hushmail
const HushmailForm = () => {
  const formRef = useRef(null); // Ref to the container where the script will inject the form

  useEffect(() => {
    // Create and append the Hushmail embed script when component mounts
    const script = document.createElement("script");
    script.src = "https://hushforms.com/f/public/javascript/embed-hush-form.js";
    script.async = true;
    formRef.current.appendChild(script); //injects third-party form on mount
  }, []);

  return (
    <Card
      sx={{ p: 3, borderRadius: 2, boxShadow: 3 }} // Responsive card container with padding and rounded corners
      aria-labelledby="hushmail-form-title" 
    >
      <Typography
        variant="h6"
        gutterBottom
        id="hushmail-form-title" 
      >
        Secure Contact Form
      </Typography>

      {/* The embedded Hushmail form will be inserted into this Box dynamically */}
      <Box
        ref={formRef}
        aria-live="polite"
        tabIndex={-1} 
      >
        <div
          data-secure-form="lisa.insights-6881"
          aria-label="Hushmail secure contact form"
        ></div>
      </Box>
    </Card>
  );
};

export default HushmailForm;