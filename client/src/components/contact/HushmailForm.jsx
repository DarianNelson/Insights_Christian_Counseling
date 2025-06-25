import React, { useEffect, useRef } from "react";
import { Box, Typography, Card } from "@mui/material";

// HushmailForm component embeds a secure third-party contact form using Hushmail
const HushmailForm = () => {
  const formRef = useRef(null); // Ref for the form container

  useEffect(() => {
    // Prevent duplicate script injection
    const existingScript = document.querySelector(
      'script[src="https://hushforms.com/f/public/javascript/embed-hush-form.js"]'
    );

    if (!existingScript) {
      const script = document.createElement("script");
      script.src =
        "https://hushforms.com/f/public/javascript/embed-hush-form.js";
      script.async = true;
      formRef.current.appendChild(script);
    }

    // No cleanup needed, since Hushmail script doesn't provide a destroy method
  }, []);

  return (
    <Card
      sx={{ p: 3, borderRadius: 2, boxShadow: 3 }}
      aria-labelledby="hushmail-form-title"
    >
      <Typography variant="h6" gutterBottom id="hushmail-form-title">
        Secure Contact Form
      </Typography>

      {/* Embedded Hushmail form will be injected here */}
      <Box
        ref={formRef}
        aria-live="polite"
        tabIndex={-1}
        sx={{ minHeight: 300 }} // Prevent layout shift while loading
      >
        <div
          data-secure-form="insightschristiancounseling"
          data-secure-form-transparent-background="true"
          aria-label="Hushmail secure contact form"
        ></div>
      </Box>
    </Card>
  );
};

export default HushmailForm;