import React, { useEffect, useRef } from "react";
import { Box, Typography } from "@mui/material";

// HushmailForm component embeds a secure third-party contact form using Hushmail
const HushmailForm = () => {
  const formRef = useRef(null);

  useEffect(() => {
    const existingScript = document.querySelector(
      'script[src="https://hushforms.com/f/public/javascript/embed-hush-form.js"]'
    );

    if (!existingScript) {
      const script = document.createElement("script");
      script.src = "https://hushforms.com/f/public/javascript/embed-hush-form.js";
      script.async = true;
      formRef.current.appendChild(script);
    }
  }, []);

  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: "100%",
        "& div[data-secure-form]": {
          width: "100%",
        },
        "& iframe": {
          width: "100%",
        },
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

      <Box ref={formRef} aria-live="polite" tabIndex={-1}>
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