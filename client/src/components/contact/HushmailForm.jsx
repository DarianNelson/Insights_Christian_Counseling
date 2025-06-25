import React, { useEffect, useRef } from "react";
import { Box, Typography } from "@mui/material";

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
      script.src = "https://hushforms.com/f/public/javascript/embed-hush-form.js";
      script.async = true;
      formRef.current.appendChild(script);
    }
    // No cleanup needed because Hushmail doesn't provide a destroy method
  }, []);

  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: "100%",
        p: 0,
        m: 0,
        overflow: "visible",
      }}
    >
      <Typography
        variant="h6"
        gutterBottom
        id="hushmail-form-title"
        sx={{ mb: 2 }}
      >
        Secure Contact Form
      </Typography>

      {/* Embedded Hushmail form will be injected here */}
      <Box
        ref={formRef}
        aria-live="polite"
        tabIndex={-1}
        sx={{
          width: "100%",
          maxWidth: "100%",
          p: 0,
          m: 0,
          overflow: "visible",
        }}
      >
        <div
          data-secure-form="insightschristiancounseling"
          data-secure-form-transparent-background="true"
          aria-label="Hushmail secure contact form"
        ></div>
      </Box>
    </Box>
  );
};

export default HushmailForm;