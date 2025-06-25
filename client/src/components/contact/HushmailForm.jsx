import React, { useEffect, useRef } from "react";
import { Box, Typography } from "@mui/material";

const HushmailForm = () => {
  const formRef = useRef(null);

  useEffect(() => {
    const existingScript = document.querySelector(
      'script[src="https://hushforms.com/f/public/javascript/embed-hush-form.js"]'
    );

    if (!existingScript && formRef.current) {
      const script = document.createElement("script");
      script.src = "https://hushforms.com/f/public/javascript/embed-hush-form.js";
      script.async = true;
      formRef.current.appendChild(script);
    }
  }, []);

  return (
    <Box
      ref={formRef}
      sx={{
        width: "100%",
        maxWidth: 600,       // Max width so it’s not too wide on large screens
        minWidth: 320,       // Minimum width for small screens
        backgroundColor: "#FAF9F7",
        p: 3,
        borderRadius: 2,
        boxShadow: 3,
        overflow: "visible",
        // Force embedded form container and iframe inside to be full width
        "& div[data-secure-form]": {
          width: "100% !important",
          maxWidth: "100% !important",
        },
        "& iframe": {
          width: "100% !important",
        },
      }}
      aria-live="polite"
      tabIndex={-1}
    >
      <Typography
        variant="h6"
        gutterBottom
        id="hushmail-form-title"
        sx={{ mb: 2 }}
      >
        Secure Contact Form
      </Typography>

      <div
        data-secure-form="insightschristiancounseling"
        data-secure-form-transparent-background="true"
        aria-label="Hushmail secure contact form"
      />
    </Box>
  );
};

export default HushmailForm;