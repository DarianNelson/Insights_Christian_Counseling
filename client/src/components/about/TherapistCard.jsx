import React from "react";
import {
  Box,
  Typography,
  Button,
  Card,
  CardContent,
  Divider,
} from "@mui/material";

import SpecialtyCard from "./SpecialtyCard";
import ServicesCard from "./ServicesCard";
import FeesInsuranceCard from "./FeesInsuranceCard";

// TherapistCard receives a therapist object and renders their full profile
const TherapistCard = ({ therapist }) => {
  return (
    <Box
      id={therapist.slug} // 👈 enables in-page linking (e.g., via anchor menu)
      sx={{ maxWidth: 1080, mx: "auto", px: { xs: 2, md: 3 }, mb: 6 }}
    >
      {/* === Top Grid Section: Headshot + Specialties (left) and Bio (right) === */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "240px 1fr" }, // Responsive layout: stacked on mobile, side-by-side on desktop
          gap: 3,
          alignItems: "start",
        }}
      >
        {/* === LEFT: Headshot + SpecialtyCard === */}
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          {/* Headshot image box */}
          <Box
            sx={{
              width: { xs: "100%", sm: "100%", md: 240 }, // Matches SpecialtyCard width
              aspectRatio: "1 / 1", // Keeps square ratio
              backgroundColor: "#FAF9F7",
              boxShadow: 3,
              borderRadius: 2,
              border: "10px solid #FAF9F7",
              overflow: "hidden",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              mx: { xs: "auto", md: 0 }, // Center image on small screens
            }}
            aria-label={`Portrait of ${therapist.name}`} 
            role="img" 
          >
            <Box
              component="img"
              src={therapist.photo}
              alt={`Professional headshot of ${therapist.name}`} 
              sx={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                borderRadius: 1,
              }}
            />
          </Box>

          {/* Renders therapist specialties in a styled card */}
          <SpecialtyCard specialties={therapist.specialties} />
        </Box>

        {/* === RIGHT: Bio Card === */}
        <Card
          sx={{ backgroundColor: "#FAF9F7", borderRadius: 4, boxShadow: 2 }}
          aria-label={`Biography and credentials for ${therapist.name}`} 
        >
          <CardContent sx={{ px: 3, py: 3 }}>
            <Typography
              id="therapist.slug"
              variant="h3"
              color="#3F7C78"
              sx={{ mb: 1 }}
              tabIndex={0} 
            >
              {therapist.name}
            </Typography>

            {/* Credentials, license, and optional affiliation */}
            <Typography variant="body1" color="textSecondary">
              {therapist.credentials}
            </Typography>
            <Typography variant="body2" color="textSecondary">
              {therapist.license}
            </Typography>
            {therapist.affiliation && (
              <Typography variant="body2" color="#3F7C78">
                {therapist.affiliation}
              </Typography>
            )}

            <Divider sx={{ my: 1, bgcolor: "#D3E3DC" }} />

            {/* Therapist bio, paragraph by paragraph */}
            {therapist.bio.map((paragraph, idx) => (
              <Typography key={idx} variant="body1" paragraph>
                {paragraph}
              </Typography>
            ))}

            {/* === Footer: Psychology Today Logo + Schedule Button === */}
            <Box
              mt={3}
              pt={2}
              borderTop="1px solid #D3E3DC"
              display="flex"
              justifyContent="flex-end"
              alignItems="center"
              gap={2}
              flexWrap="wrap"
              aria-label="Therapist contact options" 
            >
              {/* Psychology Today logo, if URL exists */}
              {therapist.psychologyTodayUrl && (
                <Box
                  component="a"
                  href={therapist.psychologyTodayUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{ display: "flex", alignItems: "center" }}
                  aria-label={`View ${therapist.name} on Psychology Today`} 
                >
                  <Box
                    component="img"
                    src="/images/psychology-today.png"
                    alt="Psychology Today logo" 
                    sx={{ height: 36 }}
                  />
                </Box>
              )}

              {/* Schedule an Appointment CTA */}
              <Button
                size="medium"
                component="a"
                href="https://hushforms.com/insightschristiancounseling"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  color: "#D38775",
                  border: "1px solid #D38775",
                  borderRadius: "50px",
                  px: 2.5,
                  py: 1,
                  whiteSpace: "nowrap",
                  fontSize: "1rem",
                  fontWeight: 500,
                  textTransform: "none",
                  "&:hover": {
                    backgroundColor: "#D38775",
                    color: "#FAF9F7",
                  },
                }}
                aria-label={`Schedule an appointment with ${therapist.name}`} 
              >
                Schedule an Appointment
              </Button>
            </Box>
          </CardContent>
        </Card>
      </Box>

      {/* === Bottom Section: Services and Fees/Insurance (full width, stacked) === */}
      <Box mt={2} display="flex" flexDirection="column" gap={2}>
        {/* List of therapy services provided */}
        <ServicesCard services={therapist.services} />
        {/* Display of fee info and accepted insurance */}
        <FeesInsuranceCard
          fees={therapist.fees}
          insurance={therapist.insurance}
        />
      </Box>
    </Box>
  );
};

export default TherapistCard;