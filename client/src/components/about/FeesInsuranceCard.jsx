import React from "react";
import { Box, Typography } from "@mui/material";

const FeesInsuranceCard = ({ fees, insurance }) => {
  return (
    <Box
      id="insurance"
      aria-label="Information about fees and accepted insurance providers" 
      sx={{
        backgroundColor: "#FAF9F7",
        mt: 2,
        p: 2,
        borderRadius: 2,
        boxShadow: 1,
        textAlign: "center",
      }}
    >
      {/* Fees Section */}
      <Typography
        variant="h3"
        id="fees-section-title" 
        sx={{
          fontWeight: 600,
          color: "#D38775",
          textAlign: "center",
          mb: 1,
        }}
      >
        Fees
      </Typography>

      {fees.map((fee, idx) => (
        <Typography
          key={idx}
          variant="body1"
          role="text" 
          sx={{
            color: "#3A3A3A",
            textAlign: "center",
            mb: 1,
            fontSize: "1.125rem",
          }}
        >
          {fee}
        </Typography>
      ))}

      {/* Insurance Section */}
      <Typography
        variant="h3"
        id="insurance-section-title" 
        sx={{
          fontWeight: 600,
          color: "#D38775",
          textAlign: "center",
          mt: 3,
          mb: 2,
        }}
      >
        Accepted Insurance
      </Typography>

      <Box
        aria-label="List of accepted insurance providers" 
        sx={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: "0.5rem 1rem",
          px: { xs: 2, sm: 4 },
          maxWidth: "800px",
          mx: "auto",
        }}
      >
        {insurance.map((provider, index) => (
          <Typography
            key={index}
            variant="body2"
            tabIndex={0}
            sx={{
              color: "#3A3A3A",
              fontSize: "1.125rem",
              transition: "transform 0.2s ease, color 0.2s ease",
              cursor: "default",
              "&:hover": {
                color: "#D38775",
                transform: "scale(1.05)",
              },
              outline: "none", 
              "&:focus": {
                outline: "2px solid #3F7C78", 
                outlineOffset: "2px",
              },
            }}
          >
            {provider}
          </Typography>
        ))}

        <Typography
          variant="body2"
          color="#3F7C78"
          mt={2}
          aria-label="Billing questions contact information" 
        >
          We work with Practitioner Management Group, Inc to manage our billing.
          If you have a question or need an explanation regarding your invoice,
          you can contact them at{" "}
          <a
            href="tel:2288651330"
            aria-label="Call Practitioner Management Group at 228-865-1330" 
          >
            228-865-1330
          </a>
          .
        </Typography>
      </Box>
    </Box>
  );
};

export default FeesInsuranceCard;